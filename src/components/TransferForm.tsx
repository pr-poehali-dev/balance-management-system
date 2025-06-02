import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const TransferForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-montserrat">Переводы</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="user" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="user">Пользователю</TabsTrigger>
            <TabsTrigger value="card">На карту</TabsTrigger>
          </TabsList>

          <TabsContent value="user" className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Получатель</label>
                <Input placeholder="Номер телефона или email" />
              </div>

              <div>
                <label className="text-sm font-medium">Сумма перевода</label>
                <Input type="number" placeholder="Введите сумму" />
              </div>

              <div>
                <label className="text-sm font-medium">Комментарий</label>
                <Input placeholder="Необязательно" />
              </div>

              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                <Icon name="Send" size={16} className="mr-2" />
                Отправить перевод
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Комиссия 0% для переводов пользователям сервиса
              </p>
            </div>
          </TabsContent>

          <TabsContent value="card" className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">
                  Номер карты получателя
                </label>
                <Input placeholder="0000 0000 0000 0000" />
              </div>

              <div>
                <label className="text-sm font-medium">Сумма перевода</label>
                <Input type="number" placeholder="Введите сумму" />
              </div>

              <div>
                <label className="text-sm font-medium">Имя получателя</label>
                <Input placeholder="IVAN PETROV" />
              </div>

              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                <Icon name="Send" size={16} className="mr-2" />
                Перевести на карту
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Комиссия 1,5%. Перевод поступит в течение 1-3 рабочих дней.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TransferForm;
