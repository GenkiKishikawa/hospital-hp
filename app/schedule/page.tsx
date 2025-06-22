import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Clock, 
  Calendar, 
  Phone, 
  Globe,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

const scheduleData = [
  { day: '月曜日', morning: '9:00-12:00', afternoon: '14:00-18:00', evening: '－' },
  { day: '火曜日', morning: '9:00-12:00', afternoon: '14:00-18:00', evening: '－' },
  { day: '水曜日', morning: '9:00-12:00', afternoon: '14:00-18:00', evening: '－' },
  { day: '木曜日', morning: '9:00-12:00', afternoon: '14:00-18:00', evening: '－' },
  { day: '金曜日', morning: '9:00-12:00', afternoon: '14:00-18:00', evening: '－' },
  { day: '土曜日', morning: '9:00-13:00', afternoon: '－', evening: '－' },
  { day: '日曜日', morning: '休診', afternoon: '休診', evening: '休診', isHoliday: true },
  { day: '祝日', morning: '休診', afternoon: '休診', evening: '休診', isHoliday: true },
];

const departmentSchedule = [
  { dept: '内科', mon: '○', tue: '○', wed: '○', thu: '○', fri: '○', sat: '○' },
  { dept: '小児科', mon: '○', tue: '○', wed: '－', thu: '○', fri: '○', sat: '○' },
  { dept: '整形外科', mon: '○', tue: '－', wed: '○', thu: '○', fri: '○', sat: '△' },
  { dept: '眼科', mon: '－', tue: '○', wed: '○', thu: '－', fri: '○', sat: '－' },
];

export default function Schedule() {
  return (
    <div className="min-h-screen py-12">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Schedule</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            診療時間
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            患者様のご都合に合わせて診療を行っております。
            ご予約はお電話にて承ります。
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* 基本診療時間 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Clock className="mr-3 h-6 w-6 text-blue-600" />
                基本診療時間
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">曜日</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">午前</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">午後</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">夜間</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleData.map((schedule, index) => (
                      <tr 
                        key={index} 
                        className={`border-b hover:bg-gray-50 ${schedule.isHoliday ? 'bg-red-50' : ''}`}
                      >
                        <td className={`py-4 px-4 font-medium ${schedule.isHoliday ? 'text-red-600' : 'text-gray-900'}`}>
                          {schedule.day}
                        </td>
                        <td className={`text-center py-4 px-4 ${schedule.morning === '休診' ? 'text-red-600' : 'text-green-600'}`}>
                          {schedule.morning}
                        </td>
                        <td className={`text-center py-4 px-4 ${schedule.afternoon === '休診' || schedule.afternoon === '－' ? 'text-red-600' : 'text-green-600'}`}>
                          {schedule.afternoon}
                        </td>
                        <td className="text-center py-4 px-4 text-gray-400">
                          {schedule.evening}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-gray-600">受付は診療終了時間の30分前まで</span>
                </div>
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-amber-600 mr-2" />
                  <span className="text-gray-600">土曜日は午後診療なし</span>
                </div>
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                  <span className="text-gray-600">日曜・祝日は休診</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 科別診療スケジュール */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Calendar className="mr-3 h-6 w-6 text-green-600" />
                科別診療スケジュール
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">診療科</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">月</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">火</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">水</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">木</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">金</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">土</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentSchedule.map((dept, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900">{dept.dept}</td>
                        <td className={`text-center py-4 px-4 ${dept.mon === '○' ? 'text-green-600' : 'text-red-600'}`}>
                          {dept.mon}
                        </td>
                        <td className={`text-center py-4 px-4 ${dept.tue === '○' ? 'text-green-600' : 'text-red-600'}`}>
                          {dept.tue}
                        </td>
                        <td className={`text-center py-4 px-4 ${dept.wed === '○' ? 'text-green-600' : 'text-red-600'}`}>
                          {dept.wed}
                        </td>
                        <td className={`text-center py-4 px-4 ${dept.thu === '○' ? 'text-green-600' : 'text-red-600'}`}>
                          {dept.thu}
                        </td>
                        <td className={`text-center py-4 px-4 ${dept.fri === '○' ? 'text-green-600' : 'text-red-600'}`}>
                          {dept.fri}
                        </td>
                        <td className={`text-center py-4 px-4 ${dept.sat === '○' ? 'text-green-600' : dept.sat === '△' ? 'text-amber-600' : 'text-red-600'}`}>
                          {dept.sat}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                  <span className="text-gray-600">○：診療あり</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-amber-600 rounded-full mr-2"></span>
                  <span className="text-gray-600">△：午前のみ</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-600 rounded-full mr-2"></span>
                  <span className="text-gray-600">－：休診</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 予約方法 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-green-600" />
                  電話予約
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  お電話でのご予約も承っております。ご不明な点がございましたらお気軽にお電話ください。
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">03-1234-5678</div>
                    <div className="text-sm text-gray-600">受付時間: 9:00-17:00（月〜土）</div>
                  </div>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 初診の方もお気軽に</li>
                  <li>• 症状のご相談も可能</li>
                  <li>• 診療科のご案内</li>
                  <li>• 急患対応のご相談</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 注意事項 */}
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>ご来院時のお願い：</strong>
              保険証を必ずお持ちください。お薬手帳をお持ちの方はご持参ください。
              発熱や風邪症状のある方は、受付時にお申し出ください。
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}