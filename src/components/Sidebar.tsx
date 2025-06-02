import Icon from "@/components/ui/icon";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-inter tracking-tight text-green-900">
          bMBank
        </h1>
        <p className="text-sm text-gray-500">Ваш цифровой кошелёк</p>
      </div>

      <nav className="space-y-2">
        <a
          href="#"
          className="flex items-center space-x-3 p-3 rounded-lg bg-purple-50 text-purple-600 font-medium"
        >
          <Icon name="Wallet" size={20} />
          <span>Главная</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700"
        >
          <Icon name="CreditCard" size={20} />
          <span>Мои карты</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700"
        >
          <Icon name="ArrowUpDown" size={20} />
          <span>Переводы</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700"
        >
          <Icon name="Receipt" size={20} />
          <span>Платежи</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700"
        >
          <Icon name="Clock" size={20} />
          <span>История</span>
        </a>
      </nav>

      <div className="mt-auto pt-8">
        <div className="flex items-center space-x-3 p-3">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <Icon name="User" size={16} />
          </div>
          <div>
            <p className="font-medium text-gray-800">Иван Петров</p>
            <p className="text-xs text-gray-500">ivan@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
