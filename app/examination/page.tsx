import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Activity, 
  Heart, 
  Eye, 
  Bone, 
  Brain,
  Stethoscope,
  Clock,
  CheckCircle,
  Calendar
} from 'lucide-react';

const healthChecks = [
  {
    title: "一般健康診断",
    description: "企業健診、入職時健診、定期健康診断",
    price: "¥8,000〜",
    duration: "約60分",
    items: [
      "身体測定（身長・体重・BMI）",
      "血圧測定",
      "視力・聴力検査",
      "尿検査",
      "血液検査（血糖・脂質・肝機能）",
      "胸部X線検査",
      "心電図検査"
    ]
  },
  {
    title: "特定健康診査",
    description: "40歳〜74歳の方の生活習慣病予防健診",
    price: "¥6,000〜",
    duration: "約45分",
    items: [
      "身体測定",
      "血圧測定",
      "血液検査（血糖・脂質・肝機能・腎機能）",
      "尿検査",
      "問診・診察"
    ]
  },
  {
    title: "人間ドック",
    description: "総合的な健康チェック",
    price: "¥25,000〜",
    duration: "約3時間",
    items: [
      "基本健診項目すべて",
      "胃内視鏡検査",
      "腹部超音波検査",
      "心電図・心エコー検査",
      "肺機能検査",
      "腫瘍マーカー検査",
      "骨密度検査"
    ]
  }
];

const screeningTests = [
  {
    icon: Heart,
    title: "心血管系検査",
    tests: [
      { name: "心電図検査", price: "¥1,500", description: "不整脈や心疾患の発見" },
      { name: "心エコー検査", price: "¥6,000", description: "心臓の構造・機能を詳細に検査" },
      { name: "血管年齢検査", price: "¥2,000", description: "動脈硬化の程度を測定" }
    ]
  },
  {
    icon: Eye,
    title: "眼科検査",
    tests: [
      { name: "眼底検査", price: "¥2,000", description: "網膜の状態を詳しく検査" },
      { name: "眼圧検査", price: "¥1,000", description: "緑内障の早期発見" },
      { name: "視野検査", price: "¥3,000", description: "視野の欠損を調べる検査" }
    ]
  },
  {
    icon: Bone,
    title: "骨・関節検査",
    tests: [
      { name: "骨密度検査", price: "¥3,000", description: "骨粗鬆症の診断" },
      { name: "関節X線検査", price: "¥2,500", description: "関節の変形や炎症を確認" },
      { name: "筋力測定", price: "¥1,500", description: "筋力低下の評価" }
    ]
  },
  {
    icon: Brain,
    title: "認知機能検査",
    tests: [
      { name: "認知機能テスト", price: "¥2,500", description: "認知症の早期発見" },
      { name: "頭部CT検査", price: "¥12,000", description: "脳の構造を詳細に検査" },
      { name: "脳ドック", price: "¥35,000", description: "脳の総合検査" }
    ]
  }
];

const cancerScreening = [
  {
    type: "胃がん検診",
    method: "胃内視鏡検査",
    price: "¥8,000",
    frequency: "年1回",
    age: "50歳以上推奨"
  },
  {
    type: "大腸がん検診",
    method: "便潜血検査",
    price: "¥1,500",
    frequency: "年1回",
    age: "40歳以上推奨"
  },
  {
    type: "肺がん検診",
    method: "胸部CT検査",
    price: "¥6,000",
    frequency: "年1回",
    age: "40歳以上推奨"
  },
  {
    type: "乳がん検診",
    method: "マンモグラフィー",
    price: "¥5,000",
    frequency: "2年に1回",
    age: "40歳以上推奨"
  },
  {
    type: "子宮頸がん検診",
    method: "細胞診検査",
    price: "¥4,000",
    frequency: "2年に1回",
    age: "20歳以上推奨"
  },
  {
    type: "前立腺がん検診",
    method: "PSA検査",
    price: "¥2,000",
    frequency: "年1回",
    age: "50歳以上推奨"
  }
];

export default function Examination() {
  return (
    <div className="min-h-screen py-12">
      <div className="container px-4  mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Health Check</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            検査・検診
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            定期的な健康診断や各種検査により、
            病気の早期発見・早期治療をサポートいたします。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="health-check" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="health-check">健康診断</TabsTrigger>
              <TabsTrigger value="screening">専門検査</TabsTrigger>
              <TabsTrigger value="cancer">がん検診</TabsTrigger>
            </TabsList>

            {/* 健康診断 */}
            <TabsContent value="health-check" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {healthChecks.map((check, index) => (
                  <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl text-center">{check.title}</CardTitle>
                      <p className="text-gray-600 text-center text-sm">{check.description}</p>
                      <div className="text-center space-y-2">
                        <div className="text-2xl font-bold text-blue-600">{check.price}</div>
                        <div className="flex items-center justify-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {check.duration}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3">検査項目</h4>
                      <ul className="space-y-2">
                        {check.items.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                        予約する
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 専門検査 */}
            <TabsContent value="screening" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {screeningTests.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center text-xl">
                          <Icon className="h-6 w-6 mr-3 text-blue-600" />
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {category.tests.map((test, idx) => (
                            <div key={idx} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium">{test.name}</h4>
                                <span className="text-blue-600 font-semibold">{test.price}</span>
                              </div>
                              <p className="text-sm text-gray-600">{test.description}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* がん検診 */}
            <TabsContent value="cancer" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cancerScreening.map((screening, index) => (
                  <Card key={index} className="border-l-4 border-l-red-500">
                    <CardHeader>
                      <CardTitle className="text-lg">{screening.type}</CardTitle>
                      <p className="text-sm text-gray-600">{screening.method}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">料金</span>
                        <span className="font-semibold text-red-600">{screening.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">頻度</span>
                        <span className="text-sm">{screening.frequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">推奨年齢</span>
                        <span className="text-sm">{screening.age}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-xl text-red-800">がん検診の重要性</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    がんは日本人の死因第1位ですが、早期発見により治癒率は大幅に向上します。
                    定期的ながん検診を受けることで、がんの早期発見・早期治療が可能になります。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">検診のメリット</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• 早期発見により治癒率向上</li>
                        <li>• 進行前の治療で体への負担軽減</li>
                        <li>• 医療費の負担軽減</li>
                        <li>• 安心・安全な生活の維持</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">当院の特徴</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• 最新の検査機器による精密検査</li>
                        <li>• 経験豊富な医師による診断</li>
                        <li>• 結果説明とアフターフォロー</li>
                        <li>• 個人の状況に応じた検診プラン</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* 予約案内 */}
          <Card className="mt-16 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl">
                <Calendar className="mr-3 h-6 w-6 text-blue-600" />
                検査・検診のご予約
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-gray-700 leading-relaxed">
                検査・検診のご予約は、お電話またはWEBにて承っております。
                ご不明な点がございましたら、お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  WEB予約
                </Button>
                <Button size="lg" variant="outline">
                  電話予約: 03-1234-5678
                </Button>
              </div>
              <div className="text-sm text-gray-600">
                <p>検査前の注意事項や詳細については、予約時にご説明いたします。</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}