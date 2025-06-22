import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Baby, 
  Bone, 
  Eye, 
  Activity, 
  Stethoscope,
  User,
  Clock
} from 'lucide-react';

const departments = [
  {
    icon: Heart,
    title: "内科",
    subtitle: "一般内科・生活習慣病",
    description: "風邪、発熱などの急性疾患から、高血圧、糖尿病、脂質異常症などの生活習慣病まで幅広く診療いたします。",
    treatments: [
      "風邪・インフルエンザ",
      "高血圧症",
      "糖尿病",
      "脂質異常症",
      "胃腸炎",
      "頭痛・めまい",
      "花粉症・アレルギー",
      "健康診断"
    ],
    doctor: "田中 太郎 医師",
    specialty: "日本内科学会認定内科医",
    color: "bg-red-50 border-red-200"
  },
  {
    icon: Baby,
    title: "小児科",
    subtitle: "0歳から15歳まで",
    description: "お子様の成長に寄り添い、感染症から慢性疾患まで小児科専門医が診療いたします。",
    treatments: [
      "感染症（風邪・発熱）",
      "予防接種",
      "乳幼児健診",
      "アレルギー疾患",
      "喘息",
      "湿疹・皮膚炎",
      "発達相談",
      "夜尿症"
    ],
    doctor: "佐藤 花子 医師",
    specialty: "日本小児科学会認定小児科専門医",
    color: "bg-blue-50 border-blue-200"
  },
  {
    icon: Bone,
    title: "整形外科",
    subtitle: "運動器疾患全般",
    description: "腰痛、肩こり、関節痛などの運動器疾患を専門的に診療し、リハビリテーションも行います。",
    treatments: [
      "腰痛・ぎっくり腰",
      "肩こり・五十肩",
      "膝関節痛",
      "捻挫・打撲",
      "関節リウマチ",
      "骨粗鬆症",
      "スポーツ外傷",
      "リハビリテーション"
    ],
    doctor: "山田 一郎 医師",
    specialty: "日本整形外科学会認定整形外科専門医",
    color: "bg-green-50 border-green-200"
  },
  {
    icon: Eye,
    title: "眼科",
    subtitle: "目の健康をサポート",
    description: "視力検査から白内障、緑内障まで、目に関するあらゆる疾患に対応いたします。",
    treatments: [
      "視力検査・眼鏡処方",
      "白内障",
      "緑内障",
      "ドライアイ",
      "結膜炎",
      "ものもらい",
      "飛蚊症",
      "眼底検査"
    ],
    doctor: "鈴木 美紀 医師",
    specialty: "日本眼科学会認定眼科専門医",
    color: "bg-purple-50 border-purple-200"
  }
];

export default function MedicalServices() {
  return (
    <div className="min-h-screen py-12">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Medical Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            診療案内
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            患者様一人ひとりに寄り添った医療を提供し、
            地域の皆様の健康をトータルサポートいたします。
          </p>
        </div>

        {/* Departments */}
        <div className="space-y-12">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <Card key={index} className={`${dept.color} overflow-hidden`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{dept.title}</h2>
                        <p className="text-gray-600">{dept.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">{dept.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="h-4 w-4 mr-2" />
                        <span className="font-medium">{dept.doctor}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Stethoscope className="h-4 w-4 mr-2" />
                        <span>{dept.specialty}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">主な診療内容</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {dept.treatments.map((treatment, idx) => (
                        <div 
                          key={idx}
                          className="bg-white/80 rounded-lg px-3 py-2 text-sm text-gray-700 text-center shadow-sm"
                        >
                          {treatment}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            診療について
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                初診の方へ
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 保険証をお持ちください</li>
                <li>• お薬手帳をお持ちの方はご持参ください</li>
                <li>• 他院からの紹介状がある場合はご持参ください</li>
                <li>• WEB予約または電話でのご予約をお勧めします</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Activity className="h-5 w-5 mr-2 text-green-600" />
                当院の特徴
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 最新の医療機器による精密検査</li>
                <li>• 経験豊富な専門医による診察</li>
                <li>• 院内処方で薬の受け取りが便利</li>
                <li>• バリアフリー設計で車椅子対応</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}