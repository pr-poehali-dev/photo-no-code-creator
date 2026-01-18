import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Index() {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState('1024x1024');
  const [quality, setQuality] = useState('standard');
  const [quantity, setQuantity] = useState([1]);
  const [model, setModel] = useState('dall-e-3');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setTimeout(() => {
      const mockImages = Array(quantity[0]).fill('https://placehold.co/1024x1024/9b87f5/ffffff?text=AI+Generated');
      setGeneratedImages(mockImages);
      setIsGenerating(false);
    }, 2000);
  };

  const exampleImages = [
    { url: 'https://placehold.co/400x400/9b87f5/ffffff?text=Пейзаж', title: 'Фантастический пейзаж' },
    { url: 'https://placehold.co/400x400/D946EF/ffffff?text=Портрет', title: 'Портрет в стиле арт' },
    { url: 'https://placehold.co/400x400/F97316/ffffff?text=Абстракция', title: 'Абстрактная композиция' },
    { url: 'https://placehold.co/400x400/0EA5E9/ffffff?text=Архитектура', title: 'Футуристическая архитектура' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Фотостудия
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#generator" className="text-foreground hover:text-primary transition-colors">Генератор</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#examples" className="text-foreground hover:text-primary transition-colors">Примеры</a>
            <a href="#guide" className="text-foreground hover:text-primary transition-colors">Инструкция</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:flex">
            <Icon name="Zap" size={16} className="mr-2" />
            Начать
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold">✨ Без кода, без навыков</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Создавай AI-фотографии<br />одним кликом
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Опиши свою идею — нейросеть воплотит её в реальность. Продвинутые настройки, множество моделей, мгновенный результат.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Wand2" size={20} className="mr-2" />
              Создать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть примеры
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: 'Zap', text: 'Мгновенно' },
              { icon: 'Sparkles', text: 'Качественно' },
              { icon: 'Lock', text: 'Безопасно' },
              { icon: 'Palette', text: 'Креативно' }
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-primary transition-all hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <Icon name={item.icon as any} size={32} className="mx-auto mb-3 text-primary" />
                  <p className="font-semibold">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="generator" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Генератор изображений</h2>
            <p className="text-xl text-muted-foreground">Настрой параметры и создай уникальный AI-арт</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="prompt" className="text-lg mb-3 block">Опиши что хочешь увидеть</Label>
                <Input
                  id="prompt"
                  placeholder="Например: футуристический город на закате, киберпанк стиль"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="text-lg h-12"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="model" className="mb-3 block">Модель нейросети</Label>
                  <Select value={model} onValueChange={setModel}>
                    <SelectTrigger id="model">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dall-e-3">DALL-E 3</SelectItem>
                      <SelectItem value="dall-e-2">DALL-E 2</SelectItem>
                      <SelectItem value="stable-diffusion">Stable Diffusion</SelectItem>
                      <SelectItem value="midjourney">Midjourney Style</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="size" className="mb-3 block">Размер</Label>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger id="size">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1024x1024">1024×1024</SelectItem>
                      <SelectItem value="1024x1792">1024×1792 (Портрет)</SelectItem>
                      <SelectItem value="1792x1024">1792×1024 (Пейзаж)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="quality" className="mb-3 block">Качество</Label>
                <Select value={quality} onValueChange={setQuality}>
                  <SelectTrigger id="quality">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Стандартное</SelectItem>
                    <SelectItem value="hd">HD (высокое)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-3 block">Количество вариантов: {quantity[0]}</Label>
                <Slider
                  value={quantity}
                  onValueChange={setQuantity}
                  min={1}
                  max={4}
                  step={1}
                  className="mb-2"
                />
                <p className="text-sm text-muted-foreground">Генерировать {quantity[0]} изображени{quantity[0] === 1 ? 'е' : 'я'}</p>
              </div>

              <Button 
                size="lg" 
                className="w-full text-lg h-14"
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
              >
                {isGenerating ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Генерация...
                  </>
                ) : (
                  <>
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Создать изображение
                  </>
                )}
              </Button>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 flex items-center justify-center min-h-[500px]">
              {generatedImages.length > 0 ? (
                <div className="grid grid-cols-2 gap-4 w-full">
                  {generatedImages.map((img, i) => (
                    <div key={i} className="relative group">
                      <img src={img} alt={`Generated ${i + 1}`} className="w-full rounded-lg shadow-lg" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                        <Button size="icon" variant="secondary">
                          <Icon name="Download" size={20} />
                        </Button>
                        <Button size="icon" variant="secondary">
                          <Icon name="Share2" size={20} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center">
                  <Icon name="ImagePlus" size={64} className="mx-auto mb-4 text-primary/40" />
                  <p className="text-lg text-muted-foreground">Здесь появятся твои AI-изображения</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея работ</h2>
            <p className="text-xl text-muted-foreground">Созданные нашими пользователями</p>
          </div>

          <Tabs defaultValue="all" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="portraits">Портреты</TabsTrigger>
              <TabsTrigger value="landscapes">Пейзажи</TabsTrigger>
              <TabsTrigger value="abstract">Абстракция</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array(6).fill(null).map((_, i) => (
                  <Card key={i} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all">
                    <img 
                      src={`https://placehold.co/400x400/${['9b87f5', 'D946EF', 'F97316'][i % 3]}/ffffff?text=AI+Art+${i+1}`}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="portraits">
              <p className="text-center text-muted-foreground">Скоро здесь будут портреты...</p>
            </TabsContent>
            <TabsContent value="landscapes">
              <p className="text-center text-muted-foreground">Скоро здесь будут пейзажи...</p>
            </TabsContent>
            <TabsContent value="abstract">
              <p className="text-center text-muted-foreground">Скоро здесь будет абстракция...</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="examples" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Примеры возможностей</h2>
            <p className="text-xl text-muted-foreground">Вдохновись и создай своё</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {exampleImages.map((example, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-all group">
                <img 
                  src={example.url} 
                  alt={example.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg">{example.title}</h3>
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto">
                    Попробовать стиль
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="guide" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как пользоваться</h2>
            <p className="text-xl text-muted-foreground">Простая инструкция для начала работы</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'MessageSquare', title: '1. Опиши идею', desc: 'Напиши что хочешь увидеть простым языком' },
              { icon: 'Settings', title: '2. Настрой параметры', desc: 'Выбери размер, качество и количество вариантов' },
              { icon: 'Download', title: '3. Получи результат', desc: 'Скачай готовое изображение или создай новое' }
            ].map((step, i) => (
              <Card key={i} className="text-center p-6 border-2 hover:border-primary transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </Card>
            ))}
          </div>

          <Accordion type="single" collapsible className="bg-white rounded-2xl p-6">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">Как писать эффективные промпты?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Будь конкретным: описывай детали, стиль, настроение. Например: "футуристический город на закате, неоновые огни, киберпанк стиль, детализация 8k"
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">Какую модель выбрать?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                DALL-E 3 — лучший выбор для реалистичных изображений. Stable Diffusion — для художественных стилей. Midjourney Style — для креативных арт-работ.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">Можно ли использовать изображения коммерчески?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, все созданные изображения принадлежат вам и могут использоваться в коммерческих целях без ограничений.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-xl text-muted-foreground mb-8">Свяжись с нами любым удобным способом</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Mail', title: 'Email', value: 'hello@ai-studio.com' },
              { icon: 'MessageCircle', title: 'Telegram', value: '@ai_studio_bot' },
              { icon: 'Phone', title: 'Телефон', value: '+7 (999) 123-45-67' }
            ].map((contact, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <Icon name={contact.icon as any} size={32} className="mx-auto mb-3 text-primary" />
                <p className="font-semibold mb-1">{contact.title}</p>
                <p className="text-sm text-muted-foreground">{contact.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" size={24} />
            <span className="text-xl font-bold">AI Фотостудия</span>
          </div>
          <p className="text-gray-400 mb-6">Создавай уникальные изображения с помощью искусственного интеллекта</p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Icon name="Facebook" size={20} />
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-8">© 2024 AI Фотостудия. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}