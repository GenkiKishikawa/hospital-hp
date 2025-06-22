import Link from 'next/link';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">洋向台クリニック</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              地域の皆様の健康をサポートし、安心して通える医療機関を目指しています。
              お気軽にご相談ください。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">診療時間</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>月〜金: 9:00-12:00, 14:00-18:00</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>土: 9:00-13:00</span>
              </div>
              <div className="text-red-300">
                日祝日は休診
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@midori-clinic.jp</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span>〒123-4567<br />東京都港区みどり1-2-3<br />みどりビル2F</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 洋向台クリニック. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}