import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: 'Главная', href: '/', icon: 'Home' },
    { name: 'Автопарк', href: '/fleet', icon: 'Car' },
    { name: 'Бронирование', href: '/booking', icon: 'Calendar' },
    { name: 'Условия', href: '/terms', icon: 'FileText' },
    { name: 'Контакты', href: '/contacts', icon: 'Phone' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center">
                <Icon name="Car" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">НАДО АВТО</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                    location.pathname === item.href
                      ? 'text-teal-600'
                      : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Button asChild className="hidden md:inline-flex">
              <Link to="/booking">
                <Icon name="Calendar" size={16} className="mr-2" />
                Забронировать
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center">
                  <Icon name="Car" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">НАДО АВТО</span>
              </div>
              <p className="text-gray-400 text-sm">
                Прокат автомобилей без водителя. Современный автопарк и удобное бронирование.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/fleet" className="hover:text-white">Аренда авто</Link></li>
                <li><Link to="/booking" className="hover:text-white">Бронирование</Link></li>
                <li><Link to="/terms" className="hover:text-white">Условия</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@nadoavto.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Тверская, 1</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Пн-Пт: 08:00-20:00</li>
                <li>Сб-Вс: 09:00-18:00</li>
                <li>Бронирование: 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 НАДО АВТО. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;