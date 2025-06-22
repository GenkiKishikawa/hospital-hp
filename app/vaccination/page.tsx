import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Shield, 
  Baby, 
  Users, 
  Plane,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
  Syringe
} from 'lucide-react';

const childVaccines = [
  {
    age: "2ヶ月",
    vaccines: [
      { name: "ヒブ", dose: "1回目", required: true },
      { name: "小児用肺炎球菌", dose: "1回目", required: true },
      { name: "B型肝炎", dose: "1回目", required: true },
      { name: "ロタウイルス", dose: "1回目", required: false }
    ]
  },
  {
    age: "3ヶ月",
    vaccines: [
      { name: "ヒブ", dose: "2回目", required: true },
      { name: "小児用肺炎球菌", dose: "2回目", required: true },
      { name: "4種混合", dose: "1回目", required: true },
      { name: "ロタウイルス", dose: "2回目", required: false }
    ]
  },
  {
    age: "4ヶ月",
    vaccines: [
      { name: "ヒブ", dose: "3回目", required: true },
      { name: "小児用肺炎球菌", dose: "3回目", required: true },
      { name: "4種混合", dose: "2回目", required: true },
      { name: "BCG", dose: "1回", required: true }
    ]
  },
  {
    age: "5ヶ月",
    vaccines: [
      { name: "4種混合", dose: "3回目", required: true },
      { name: "B型肝炎", dose: "2回目", required: true }
    ]
  },
  {
    age: "1歳",
    vaccines: [
      { name: "MR（麻疹・風疹）", dose: "1期", required: true },
      { name: "水痘", dose: "1回目", required: true },
      { name: "おたふくかぜ", dose: "1回目", required: false },
      { name: "ヒブ", dose: "追加", required: true },
      { name: "小児用肺炎球菌", dose: "追加", required: true }
    ]
  }
];

const adultVaccines = [
  {
    name: "インフルエンザ",
    season: "毎年10月〜12月",
    price: "¥3,500",
    description: "季節性インフルエンザの予防。毎年接種が推奨されます。",
    target: "生後6ヶ月以上すべての方"
  },
  {
    name: "新型コロナウイルス",
    season: "通年",
    price: "公費負担",
    description: "新型コロナウイルス感染症の重症化予防。",
    target: "12歳以上"
  },
  {
    name: "肺炎球菌（成人用）",
    season: "通年",
    price: "¥8,000",
    description: "肺炎の最も多い原因菌に対する予防接種。",
    target: "65歳以上または基礎疾患のある方"
  },
  {
    name: "帯状疱疹",
    season: "通年",
    price: "¥22,000",
    description: "帯状疱疹とその後の神経痛の予防。",
    target: "50歳以上"
  },
  {
    name: "風疹・麻疹（MR）",
    season: "通年",
    price: "¥9,000",
    description: "風疹・麻疹の予防。妊娠を希望する女性とその家族に特に推奨。",
    target: "妊娠希望女性、その家族"
  },
  {
    name: "B型肝炎",
    season: "通年",
    price: "¥5,500",
    description: "B型肝炎ウイルス感染の予防。3回接種が必要。",
    target: "医療従事者、家族内感染リスクのある方"
  }
];

const travelVaccines = [
  {
    destination: "東南アジア",
    vaccines: ["A型肝炎", "B型肝炎", "日本脳炎", "腸チフス"],
    duration: "接種完了まで4-6週間"
  },
  {
    destination: "中東・アフリカ",
    vaccines: ["A型肝炎", "B型肝炎", "髄膜炎菌", "黄熱病"],
    duration: "接種完了まで6-8週間"
  },
  {
    destination: "南米",
    vaccines: ["A型肝炎", "B型肝炎", "黄熱病", "腸チフス"],
    duration: "接種完了まで6-8週間"
  },
  {
    destination: "欧米",
    vaccines: ["A型肝炎", "B型肝炎"],
    duration: "接種完了まで2-4週間"
  }
];

export default function Vaccination() {
  return (
    <div className="min-h-screen py-12">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Vaccination</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            予防接種
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            各種予防接種により、感染症から身を守り、
            地域の感染症予防にも貢献します。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="child" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="child">小児予防接種</TabsTrigger>
              <TabsTrigger value="adult">成人予防接種</TabsTrigger>
              <TabsTrigger value="travel">海外渡航</TabsTrigger>
            </TabsList>

            {/* 小児予防接種 */}
            <TabsContent value="child" className="space-y-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Baby className="mr-3 h-6 w-6 text-blue-600" />
                    小児予防接種スケジュール
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    お子様の健康を守るため、決められた時期に適切な予防接種を受けることが大切です。
                    当院では、個別のスケジュール管理もサポートいたします。
                  </p>
                  
                  <div className="space-y-6">
                    {childVaccines.map((schedule, index) => (
                      <div key={index} className="border rounded-lg p-4 bg-white">
                        <h3 className="text-lg font-semibold mb-3 text-blue-600">{schedule.age}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {schedule.vaccines.map((vaccine, idx) => (
                            <div 
                              key={idx} 
                              className={`flex items-center justify-between p-3 rounded ${
                                vaccine.required ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
                              }`}
                            >
                              <div className="flex items-center">
                                <Shield className={`h-4 w-4 mr-2 ${vaccine.required ? 'text-green-600' : 'text-gray-400'}`} />
                                <span className="font-medium">{vaccine.name}</span>
                              </div>
                              <div className="text-sm text-gray-600">
                                {vaccine.dose}
                                {vaccine.required && <Badge className="ml-2 bg-green-100 text-green-800 text-xs">定期</Badge>}
                                {!vaccine.required && <Badge className="ml-2 bg-gray-100 text-gray-800 text-xs">任意</Badge>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>重要なお知らせ：</strong>
                  予防接種は予約制です。母子手帳を必ずお持ちください。
                  体調不良時は接種を延期する場合があります。
                </AlertDescription>
              </Alert>
            </TabsContent>

            {/* 成人予防接種 */}
            <TabsContent value="adult" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {adultVaccines.map((vaccine, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="flex items-center">
                          <Syringe className="mr-2 h-5 w-5 text-green-600" />
                          {vaccine.name}
                        </span>
                        <span className="text-lg font-bold text-green-600">{vaccine.price}</span>
                      </CardTitle>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        {vaccine.season}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">{vaccine.description}</p>
                      <div className="bg-gray-50 p-3 rounded">
                        <span className="text-sm font-medium text-gray-600">対象：</span>
                        <span className="text-sm text-gray-700">{vaccine.target}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-3 h-6 w-6 text-yellow-600" />
                    集団免疫の重要性
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    予防接種は個人の感染症予防だけでなく、地域全体の感染症流行を防ぐ「集団免疫」の形成にも重要な役割を果たします。
                    特に、免疫力の弱い方々を守るためにも、適切な予防接種を受けることが社会貢献につながります。
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 海外渡航 */}
            <TabsContent value="travel" className="space-y-8">
              <Card className="bg-orange-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plane className="mr-3 h-6 w-6 text-orange-600" />
                    海外渡航前の予防接種
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    海外渡航時は、渡航先の感染症リスクに応じた予防接種が必要です。
                    ワクチンの種類や接種スケジュールは渡航先により異なりますので、
                    早めのご相談をお勧めします。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {travelVaccines.map((travel, index) => (
                      <div key={index} className="border rounded-lg p-4 bg-white">
                        <h3 className="text-lg font-semibold mb-3 text-orange-600">{travel.destination}</h3>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm font-medium text-gray-600">推奨ワクチン：</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {travel.vaccines.map((vaccine, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {vaccine}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-1" />
                            {travel.duration}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>渡航前の準備</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">渡航6-8週間前にご相談</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">渡航先の感染症情報確認</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">必要なワクチンの接種計画</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">英文予防接種証明書の発行</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>持参物</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm">パスポート（コピー可）</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm">予防接種歴のわかるもの</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm">渡航先・期間・目的の詳細</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm">現在服用中の薬の情報</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* 予約案内 */}
          <Card className="mt-16 bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl">
                <Calendar className="mr-3 h-6 w-6 text-green-600" />
                予防接種のご予約
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-gray-700 leading-relaxed">
                予防接種は完全予約制です。ワクチンの在庫確認のため、
                事前にお電話でのご予約をお願いいたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Calendar className="mr-2 h-5 w-5" />
                  電話予約: 123-456-5678
                </Button>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>受付時間: 月〜金 9:00-17:00、土 9:00-12:00</p>
                <p>小児の予防接種は母子手帳を必ずお持ちください</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}