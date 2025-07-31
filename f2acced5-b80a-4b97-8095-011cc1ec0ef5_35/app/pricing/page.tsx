
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [area, setArea] = useState('');
  const [roomType, setRoomType] = useState('');
  const [budget, setBudget] = useState('');
  const [estimateResult, setEstimateResult] = useState<number | null>(null);

  const pricingPlans = [
    {
      id: 'basic',
      name: 'ベーシックプラン',
      price: '18,000',
      unit: '円/㎡〜',
      description: '基本的な床材交換・壁紙張替えに最適',
      features: [
        '床材交換（フローリング・クッションフロア）',
        '壁紙張替え（スタンダード品）',
        '基本的な下地処理',
        '施工保証1年',
        '現地調査無料',
        'アフターサポート'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'スタンダードプラン',
      price: '28,000',
      unit: '円/㎡〜',
      description: '機能性とデザイン性を両立した人気プラン',
      features: [
        '高品質床材交換（無垢材対応）',
        'デザイン壁紙張替え',
        '電気・照明工事',
        '建具交換・調整',
        '施工保証2年',
        '3D完成イメージ提供',
        '専任担当者サポート'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'プレミアムプラン',
      price: '45,000',
      unit: '円/㎡〜',
      description: '最高品質の素材と技術で理想の空間を実現',
      features: [
        '最高級床材・壁材使用',
        'カスタムデザイン対応',
        '水回り工事込み',
        '収納リフォーム',
        '施工保証5年',
        'インテリアコーディネート',
        '24時間サポート体制'
      ],
      popular: false
    }
  ];

  const additionalServices = [
    { name: '現地調査', price: '無料', description: '専門スタッフによる詳細な現地調査' },
    { name: '3D完成イメージ', price: '10,000円', description: '完成後のイメージを3Dで確認' },
    { name: '解体・廃材処理', price: '5,000円/㎡', description: '既存材の解体と適切な廃材処理' },
    { name: '家具移動サービス', price: '20,000円', description: '工事期間中の家具移動・保管' },
    { name: '仮住まい手配', price: '相談', description: '工事期間中の仮住まい手配サポート' },
    { name: '緊急対応', price: '15,000円', description: '工事後の緊急トラブル対応' }
  ];

  const calculateEstimate = () => {
    if (!area || !roomType) return;
    
    const areaNum = parseFloat(area);
    let basePrice = 0;
    
    switch (selectedPlan) {
      case 'basic':
        basePrice = 18000;
        break;
      case 'standard':
        basePrice = 28000;
        break;
      case 'premium':
        basePrice = 45000;
        break;
    }
    
    let multiplier = 1;
    switch (roomType) {
      case 'living':
        multiplier = 1.2;
        break;
      case 'kitchen':
        multiplier = 1.5;
        break;
      case 'bathroom':
        multiplier = 2.0;
        break;
      case 'bedroom':
        multiplier = 1.0;
        break;
    }
    
    const estimate = Math.round(areaNum * basePrice * multiplier);
    setEstimateResult(estimate);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
              logo
            </Link>
            <nav className="flex space-x-8">
              <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600">使い方</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600">ギャラリー</Link>
              <Link href="/pricing" className="text-blue-600 font-semibold">料金・見積</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">会社概要</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20interior%20design%20pricing%20concept%20with%20calculator%20blueprints%20and%20color%20swatches%20on%20clean%20white%20desk%2C%20professional%20renovation%20planning%20tools%2C%20bright%20clean%20background%20with%20natural%20lighting%2C%20minimalist%20style%2C%20business%20consultation%20atmosphere&width=1200&height=400&seq=pricing-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            明確な料金体系で<br />安心のリフォーム
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            追加費用なし・見積もり無料。お客様のご予算に合わせた最適なプランをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('quick-estimate')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              クイック見積もり
            </button>
            <button 
              onClick={() => document.getElementById('pricing-plans')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              料金プランを見る
            </button>
          </div>
        </div>
      </section>

      {/* Quick Estimate Section */}
      <section id="quick-estimate" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">クイック見積もり</h2>
            <p className="text-lg text-gray-600">簡単な情報入力で概算費用をすぐにお知らせします</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">プラン選択</label>
                <select 
                  value={selectedPlan} 
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                >
                  <option value="basic">ベーシックプラン</option>
                  <option value="standard">スタンダードプラン</option>
                  <option value="premium">プレミアムプラン</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">施工面積（㎡）</label>
                <input
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="例：20"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">部屋タイプ</label>
                <select 
                  value={roomType} 
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                >
                  <option value="">選択してください</option>
                  <option value="living">リビング</option>
                  <option value="bedroom">寝室</option>
                  <option value="kitchen">キッチン</option>
                  <option value="bathroom">バスルーム</option>
                </select>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={calculateEstimate}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                概算見積もりを計算
              </button>
            </div>

            {estimateResult && (
              <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">概算見積もり結果</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">
                  ¥{estimateResult.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">
                  ※この金額は概算です。正確な見積もりは現地調査後にご提示いたします。
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  正式見積もりを依頼する
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing-plans" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">料金プラン</h2>
            <p className="text-lg text-gray-600">お客様のニーズに合わせた3つのプランをご用意</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`relative bg-white rounded-2xl p-8 shadow-lg ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      人気プラン
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.unit}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700 ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  このプランで相談する
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">追加サービス</h2>
            <p className="text-lg text-gray-600">より充実したリフォームをサポートするオプションサービス</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                  <span className="text-blue-600 font-bold">{service.price}</span>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Guarantee */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">価格保証制度</h2>
            <p className="text-lg text-gray-600">お客様に安心していただくための3つの保証</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">追加費用なし保証</h3>
              <p className="text-gray-600">
                見積もり確定後の追加費用は一切発生しません。事前に全て含めた明確な価格をご提示します。
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">工期保証</h3>
              <p className="text-gray-600">
                お約束した工期を必ず守ります。万が一遅延した場合は、お客様への補償制度もご用意しています。
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">品質保証</h3>
              <p className="text-gray-600">
                施工完了後も最大5年間の保証期間を設けています。不具合があれば無料で対応いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">お支払い方法</h2>
            <p className="text-lg text-gray-600">お客様のご都合に合わせた柔軟な支払いオプション</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">一括払い</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 現金・銀行振込</li>
                <li>• クレジットカード決済</li>
                <li>• 一括払い割引あり（3%オフ）</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">分割払い</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 3回〜36回まで分割可能</li>
                <li>• 金利手数料当社負担（12回まで）</li>
                <li>• 月々の負担を軽減</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            まずは無料見積もりから始めましょう
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            専門スタッフがお客様のご要望を丁寧にお聞きし、最適なプランをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              無料見積もりを依頼
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              施工事例を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>logo</h3>
              <p className="text-gray-400">
                お客様の理想の住まいを<br />
                確かな技術で実現します
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/how-it-works" className="hover:text-white">使い方</Link></li>
                <li><Link href="/gallery" className="hover:text-white">施工事例</Link></li>
                <li><Link href="/pricing" className="hover:text-white">料金・見積</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">会社概要</Link></li>
                <li><Link href="/contact" className="hover:text-white">お問い合わせ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">お問い合わせ</h4>
              <p className="text-gray-400">
                TEL: 03-1234-5678<br />
                営業時間: 9:00-18:00
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Logo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
