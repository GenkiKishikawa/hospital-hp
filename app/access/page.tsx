import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Train, 
  Car, 
  Clock, 
  Phone,
  Mail,
  ExternalLink,
  Navigation,
  Accessibility,
  ParkingCircle,
  Users,
  Baby,
} from 'lucide-react';

const transportInfo = [
  {
    icon: Train,
    method: "電車でお越しの方",
    routes: [
      "JR山手線「みどり駅」東口より徒歩3分",
      "東京メトロ銀座線「みどり駅」2番出口より徒歩5分",
      "東京メトロ日比谷線「みどり駅」A4出口より徒歩7分"
    ]
  },
  {
    icon: Car,
    method: "お車でお越しの方",
    routes: [
      "首都高速「みどりIC」より約10分",
      "環状7号線「みどり交差点」より約5分",
      "国道246号線「みどり駅前」より約3分"
    ]
  }
];

const facilities = [
  { name: "駐車場", icon: ParkingCircle, description: "3台完備（無料）" },
  { name: "バリアフリー", icon: Accessibility, description: "車椅子対応・エレベーター完備" },
  { name: "待合室", icon: Users, description: "広々とした快適な待合スペース" },
  { name: "キッズスペース", icon: Baby, description: "お子様連れの方にも安心" }
];

const relatedLinks = [
  {
    category: "医療機関",
    links: [
      { name: "東京都医師会", url: "https://www.tokyo.med.or.jp/", description: "東京都の医療情報" },
      { name: "厚生労働省", url: "https://www.mhlw.go.jp/", description: "最新の医療・健康情報" },
      { name: "日本医師会", url: "https://www.med.or.jp/", description: "全国の医療機関情報" },
      { name: "東京都保健医療局", url: "https://www.hokeniryo.metro.tokyo.lg.jp/", description: "東京都の保健医療情報" }
    ]
  },
  {
    category: "緊急時・救急",
    links: [
      { name: "東京消防庁救急相談センター", url: "tel:#7119", description: "24時間救急相談（#7119）" },
      { name: "東京都医療機関案内サービス", url: "https://www.himawari.metro.tokyo.jp/", description: "ひまわり（医療機関検索）" },
      { name: "小児救急電話相談", url: "tel:#8000", description: "小児の急病時相談（#8000）" },
      { name: "毒物情報センター", url: "https://www.j-poison-ic.jp/", description: "中毒110番" }
    ]
  },
  {
    category: "健康情報",
    links: [
      { name: "港区保健所", url: "https://www.city.minato.tokyo.jp/", description: "地域の保健情報" },
      { name: "国立感染症研究所", url: "https://www.niid.go.jp/", description: "感染症・予防接種情報" },
      { name: "日本小児科学会", url: "https://www.jpeds.or.jp/", description: "小児の健康・病気情報" },
      { name: "糖尿病情報センター", url: "https://dmic.ncgm.go.jp/", description: "糖尿病の情報・治療" }
    ]
  }
];

export default function Access() {
  return (
    <div className="min-h-screen py-12">
      <div className="container px-4  mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Access & Links</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            アクセス・リンク
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            当院へのアクセス方法と医療・健康に関する
            有用なリンク集をご案内いたします。
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* 基本情報 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MapPin className="mr-3 h-6 w-6 text-blue-600" />
                  所在地・連絡先
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">住所</h3>
                  <p className="text-gray-700">
                    〒970-0314<br />
                    福島県いわき市洋向台4-1-2<br />
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold">電話番号</div>
                      <div className="text-blue-600">0246-55-5150</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <Mail className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <div className="font-semibold">メール</div>
                      <div className="text-green-600 text-sm">info@midori-clinic.jp</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    受付時間
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>月〜金: 8:30-11:30, 13:30-17:30</p>
                    <p>土: 8:30-12:30</p>
                    <p className="text-red-600">日祝日は休診</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Navigation className="mr-3 h-6 w-6 text-green-600" />
                  地図・ナビゲーション
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Google Mapへのリンク</p>
                    <p className="text-sm">実際の地図が表示されます</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full" variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Google Mapで開く
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Navigation className="mr-2 h-4 w-4" />
                    ナビゲーション開始
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 交通アクセス */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">交通アクセス</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {transportInfo.map((transport, index) => {
                  const Icon = transport.icon;
                  return (
                    <div key={index}>
                      <h3 className="flex items-center text-lg font-semibold mb-4">
                        <Icon className="h-5 w-5 mr-2 text-blue-600" />
                        {transport.method}
                      </h3>
                      <ul className="space-y-2">
                        {transport.routes.map((route, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{route}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* 院内設備 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">院内設備・サービス</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {facilities.map((facility, index) => {
                  const Icon = facility.icon;
                  return (
                    <div key={index} className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <Icon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                      <h3 className="font-semibold mb-2">{facility.name}</h3>
                      <p className="text-sm text-gray-600">{facility.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* 関連リンク */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">関連リンク</h2>
              <p className="text-lg text-gray-600">
                医療・健康に関する有用な情報をご提供するサイトをご紹介いたします
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {relatedLinks.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.links.map((link, idx) => (
                        <div key={idx} className="border-b border-gray-100 pb-3 last:border-b-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                                {link.name}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                            </div>
                            <ExternalLink className="h-4 w-4 text-gray-400 ml-2 flex-shrink-0" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 緊急時連絡先 */}
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-red-800">
                <Phone className="mr-3 h-6 w-6" />
                緊急時の連絡先
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">救急・緊急時</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="font-medium w-20">救急車:</span>
                      <span className="text-red-600 font-bold">119</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-20">救急相談:</span>
                      <span className="text-red-600 font-bold">#7119</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-20">小児救急:</span>
                      <span className="text-red-600 font-bold">#8000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">休診時のご案内</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    当院休診時の緊急時は、最寄りの救急病院または
                    東京消防庁救急相談センター（#7119）にご相談ください。
                    かかりつけ患者様で緊急を要する場合は、
                    留守番電話にメッセージを残してください。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}