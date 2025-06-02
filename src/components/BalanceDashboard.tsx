import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import TopUpForm from "@/components/TopUpForm";
import TransferForm from "@/components/TransferForm";

const BalanceDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Баланс */}
      <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center justify-between font-montserrat">
            <span>Основной баланс</span>
            <Icon name="Eye" size={20} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold mb-2">24 850,75 ₽</div>
          <p className="text-purple-100">Доступно для операций</p>
        </CardContent>
      </Card>

      {/* Быстрые действия */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button className="h-16 bg-green-500 hover:bg-green-600">
          <div className="flex items-center space-x-3">
            <Icon name="Plus" size={20} />
            <span>Пополнить</span>
          </div>
        </Button>
        <Button className="h-16 bg-blue-500 hover:bg-blue-600">
          <div className="flex items-center space-x-3">
            <Icon name="Send" size={20} />
            <span>Перевести</span>
          </div>
        </Button>
        <Button className="h-16 bg-orange-500 hover:bg-orange-600">
          <div className="flex items-center space-x-3">
            <Icon name="Receipt" size={20} />
            <span>Оплатить</span>
          </div>
        </Button>
      </div>

      {/* Основные формы */}
      <Tabs defaultValue="topup" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="topup">Пополнение</TabsTrigger>
          <TabsTrigger value="transfer">Переводы</TabsTrigger>
        </TabsList>
        <TabsContent value="topup">
          <TopUpForm />
        </TabsContent>
        <TabsContent value="transfer">
          <TransferForm />
        </TabsContent>
      </Tabs>

      {/* Последние операции */}
      <Card>
        <CardHeader>
          <CardTitle className="font-montserrat">Последние операции</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Plus" size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Пополнение с карты</p>
                  <p className="text-sm text-gray-500">Сегодня, 14:30</p>
                </div>
              </div>
              <span className="font-bold text-green-600">+5 000 ₽</span>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Send" size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Перевод Анне К.</p>
                  <p className="text-sm text-gray-500">Вчера, 19:45</p>
                </div>
              </div>
              <span className="font-bold text-red-600">-1 200 ₽</span>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Icon name="Receipt" size={16} className="text-orange-600" />
                </div>
                <div>
                  <p className="font-medium">Оплата ЖКХ</p>
                  <p className="text-sm text-gray-500">5 дек, 10:15</p>
                </div>
              </div>
              <span className="font-bold text-red-600">-3 450 ₽</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BalanceDashboard;
