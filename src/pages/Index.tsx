import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export default function Index() {
  const [pickupDate, setPickupDate] = useState<Date | undefined>()
  const [returnDate, setReturnDate] = useState<Date | undefined>()

  const cars = [
    {
      id: 1,
      name: 'Toyota Corolla',
      category: 'Эконом',
      price: 2500,
      fuel: 'Бензин',
      transmission: 'Автомат',
      passengers: 5,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'BMW X3',
      category: 'Премиум',
      price: 6500,
      fuel: 'Бензин',
      transmission: 'Автомат',
      passengers: 5,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Mercedes C-Class',
      category: 'Бизнес',
      price: 5200,
      fuel: 'Бензин',
      transmission: 'Автомат',
      passengers: 5,
      image: '/placeholder.svg'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://cdn.poehali.dev/files/1a16f785-b933-43e5-ba2a-fe305dcd745b.jpg" 
                alt="НАДО АВТО" 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#cars" className="text-gray-700 hover:text-primary transition-colors">Автопарк</a>
              <a href="#booking" className="text-gray-700 hover:text-primary transition-colors">Бронирование</a>
              <a href="#terms" className="text-gray-700 hover:text-primary transition-colors">Условия</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Прокат автомобилей
                <span className="text-primary block">без водителя</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Свобода передвижения по городу в любое время. Удобное бронирование онлайн, широкий выбор автомобилей и прозрачные условия аренды.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать сейчас
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Icon name="Car" size={20} className="mr-2" />
                  Посмотреть автопарк
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10 animate-scale-in">
                <h3 className="text-2xl font-semibold mb-6 text-center">Быстрое бронирование</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pickup-date">Дата получения</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <Icon name="Calendar" size={16} className="mr-2" />
                            {pickupDate ? format(pickupDate, 'dd MMMM', { locale: ru }) : 'Выберите дату'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={pickupDate}
                            onSelect={setPickupDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="return-date">Дата возврата</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <Icon name="Calendar" size={16} className="mr-2" />
                            {returnDate ? format(returnDate, 'dd MMMM', { locale: ru }) : 'Выберите дату'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={returnDate}
                            onSelect={setReturnDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="car-type">Класс автомобиля</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите класс" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="economy">Эконом</SelectItem>
                        <SelectItem value="comfort">Комфорт</SelectItem>
                        <SelectItem value="business">Бизнес</SelectItem>
                        <SelectItem value="premium">Премиум</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 py-6 text-lg">
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти автомобиль
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section id="cars" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наш автопарк</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Современные и надёжные автомобили различных классов для любых задач
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <Card key={car.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center">
                    <Icon name="Car" size={64} className="text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-xl">{car.name}</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {car.category}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Icon name="Fuel" size={16} className="mr-2" />
                      {car.fuel}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Settings" size={16} className="mr-2" />
                      {car.transmission}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Users" size={16} className="mr-2" />
                      {car.passengers} мест
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">{car.price.toLocaleString()} ₽</span>
                      <span className="text-gray-500 text-sm ml-1">/день</span>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      Выбрать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">Преимущества аренды автомобилей в НАДО АВТО</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Clock',
                title: 'Круглосуточно',
                description: 'Получение и возврат автомобиля в любое время'
              },
              {
                icon: 'Shield',
                title: 'Страхование',
                description: 'Полная страховка КАСКО включена в стоимость'
              },
              {
                icon: 'MapPin',
                title: 'Удобные локации',
                description: 'Офисы в центре города и аэропорту'
              },
              {
                icon: 'Headphones',
                title: 'Поддержка 24/7',
                description: 'Техническая помощь в любое время суток'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon name={feature.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section id="terms" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Условия аренды</h2>
            <p className="text-xl text-gray-600">Простые и понятные правила</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Icon name="FileText" size={24} className="mr-3 text-primary" />
                Документы для аренды
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="mr-2 text-primary" />
                  Водительское удостоверение (стаж от 2 лет)
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="mr-2 text-primary" />
                  Паспорт гражданина РФ
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="mr-2 text-primary" />
                  Банковская карта для залога
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Icon name="CreditCard" size={24} className="mr-3 text-primary" />
                Условия оплаты
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="mr-2 text-primary" />
                  Оплата при получении автомобиля
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="mr-2 text-primary" />
                  Залог блокируется на карте
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="mr-2 text-primary" />
                  Возврат залога в течение 3 дней
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="Phone" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600 mb-2">+7 (495) 123-45-67</p>
              <p className="text-sm text-gray-500">Круглосуточно</p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Офис</h3>
              <p className="text-gray-600 mb-2">г. Москва, ул. Тверская, 10</p>
              <p className="text-sm text-gray-500">Пн-Вс: 08:00-22:00</p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="Mail" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-2">info@nado-auto.ru</p>
              <p className="text-sm text-gray-500">Ответим в течение часа</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/1a16f785-b933-43e5-ba2a-fe305dcd745b.jpg" 
                alt="НАДО АВТО" 
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                Надёжный прокат автомобилей без водителя в Москве
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Аренда авто</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Долгосрочная аренда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Корпоративные клиенты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Условия аренды</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Страхование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@nado-auto.ru</p>
                <p>г. Москва, ул. Тверская, 10</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 НАДО АВТО. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}