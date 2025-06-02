import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const TopUpForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-montserrat">Пополнение баланса</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Способы пополнения */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-20 flex-col space-y-2">
            <Icon name="CreditCard" size={24} />
            <span>Банковская карта</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col space-y-2">
            <Icon name="Smartphone" size={24} />
            <span>СБП</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col space-y-2">
            <Icon name="MapPin" size={24} />
            <span>Терминал</span>
          </Button>
        </div>

        {/* Сумма пополнения */}
        <div className="space-y-4">
          <label className="text-sm font-medium">Сумма пополнения</label>
          <Input
            type="number"
            placeholder="Введите сумму"
            className="text-lg"
          />

          {/* Быстрые суммы */}
          <div className="grid grid-cols-4 gap-2">
            <Button variant="outline" size="sm">
              500 ₽
            </Button>
            <Button variant="outline" size="sm">
              1 000 ₽
            </Button>
            <Button variant="outline" size="sm">
              5 000 ₽
            </Button>
            <Button variant="outline" size="sm">
              10 000 ₽
            </Button>
          </div>
        </div>

        {/* Данные карты */}
        <div className="space-y-4">
          <Input placeholder="Номер карты" />
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="ММ/ГГ" />
            <Input placeholder="CVV" type="password" />
          </div>
          <Input placeholder="Имя держателя карты" />
        </div>

        <Button className="w-full bg-green-500 hover:bg-green-600">
          <Icon name="Plus" size={16} className="mr-2" />
          Пополнить баланс
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Комиссия 0%. Средства поступают мгновенно.
        </p>
      </CardContent>
    </Card>
  );
};

export default TopUpForm;
