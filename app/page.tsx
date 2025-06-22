'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import 'keen-slider/keen-slider.min.css'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Baby, 
  Bone, 
  Eye, 
  Activity, 
  Calendar, 
  Clock,
  MapPin,
  Phone,
  CheckCircle,
} from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image'

import "./styles.css"

const services = [
  {
    icon: Heart,
    title: "内科",
    description: "風邪、高血圧、糖尿病などの一般的な内科診療"
  },
  {
    icon: Baby,
    title: "小児科",
    description: "お子様の健康管理から急性疾患まで幅広く対応"
  },
  {
    icon: Bone,
    title: "整形外科",
    description: "腰痛、肩こり、関節痛などの運動器疾患の治療"
  },
  {
    icon: Eye,
    title: "眼科",
    description: "視力検査、白内障、緑内障などの眼科疾患"
  }
];

const features = [
  "最新の医療機器による精密検査",
  "経験豊富な専門医による診察",
  "WEB予約システムで待ち時間短縮",
  "土曜日も午前診療実施",
  "院内処方で薬の受け取りが便利",
  "バリアフリー設計で車椅子対応"
];

const images = [
  '/top.jpg',
  '/top2.jpg',
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  return (
    <div className="min-h-screen">
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className="keen-slider h-[400px] md:h-[500px] relative overflow-hidden bg-gray-100">
          {images.map((src, index) => (
            <div key={index} className="keen-slider__slide flex justify-center">
              <div className="relative w-full max-w-[1505px] aspect-[16/9]">
                <Image
                  src={src}
                  alt={`スライド${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots flex justify-center mt-4 space-x-2">
            {Array.from({ length: instanceRef.current.track.details.slides.length }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "w-3 h-3 rounded-full transition-colors " +
                  (currentSlide === idx ? "bg-blue-600" : "bg-gray-300")
                }
              />
            ))}
          </div>
        )}
      </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br bg-white py-10">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              地域密着型医療
            </Badge>
            <p className="text-xl text-gray-600 font-bold mb-8 leading-relaxed">
                洋向台クリニックでは、赤ちゃんからご高齢の方まで幅広く対応する地域医療を実践しています。
                どうぞ、皆さまのご家庭のホームドクターとしてご活用ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-blue-50 text-blue-600 border-blue-600">
                <Phone className="mr-2 h-5 w-5" />
                電話予約
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              診療科目
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              幅広い診療科目で、あらゆる年代の患者様のニーズにお応えします
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/medical-services">
              <Button variant="outline" size="lg">
                診療案内を詳しく見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                当院の特徴
              </h2>
              <p className="text-lg text-gray-600">
                患者様に安心して診療を受けていただける環境を整えています
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                診療時間・アクセス
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-blue-600" />
                    診療時間
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-4 gap-2 text-sm font-medium text-gray-600 border-b pb-2">
                    <div></div>
                    <div>午前</div>
                    <div>午後</div>
                    <div>夜間</div>
                  </div>
                  {['月', '火', '水', '木', '金', '土'].map((day) => (
                    <div key={day} className="grid grid-cols-4 gap-2 text-sm">
                      <div className="font-medium">{day}</div>
                      <div className="text-green-600">9:00-12:00</div>
                      <div className={day === '土' ? 'text-gray-400' : 'text-green-600'}>
                        {day === '土' ? '－' : '14:00-18:00'}
                      </div>
                      <div className="text-gray-400">－</div>
                    </div>
                  ))}
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    <div className="font-medium text-red-600">日・祝</div>
                    <div className="text-red-600">休診</div>
                    <div className="text-red-600">休診</div>
                    <div className="text-red-600">休診</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                    アクセス
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">〒970-0314</p>
                    <p className="text-gray-600 mb-4">
                      福島県いわき市洋向台4-1-2<br />
                    </p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• 当クリニックでは送迎を行っています。<br />
                      ご希望の方は電話で予約をしてください。</p>
                    <p>• 駐車場〇台完備</p>
                  </div>
                  <Link href="/access">
                    <Button variant="outline" className="w-full">
                      詳しいアクセス情報
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container px-4 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            お気軽にご相談ください
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            初診の方もお電話でご予約いただけます
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 bg-white/10 px-6 py-3 rounded-lg">
              <Phone className="h-5 w-5" />
              <span className="text-lg font-medium">123-456-5678</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const colorClass = "text-gray-300";

  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow cursor-pointer ${colorClass} ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}
      `
      }
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" fill='currentColor' />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill='currentColor' />
      )}
    </svg>
  )
}