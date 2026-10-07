'use client';

import React from 'react';

const Features = () => {
  const features = [
    {
      title: "مزایای خرید بلیط هواپیما از علی‌بابا",
      description: "شما با خرید بلیط هواپیما از علی‌بابا با سامانه مطمئن و معتبری روبه‌رو هستید که"
    },
    {
      title: "تقویم قیمتی بلیط هواپیما",
      description: "یکی از ابزارهای کاربردی و بسیار مفید علی بابا برای خرید اینترنتی بلیط هواپیما."
    },
    {
      title: "فیلترهای پیشرفته جستجوی بلیط هواپیما",
      description: "با استفاده از فیلترهای کنار صفحه می‌توانید ایران‌ترین مورد نظارت را انتخاب کنید."
    },
    {
      title: "فیلترهای جستجو برای بلیط هواپیما داخلی",
      description: "",
      subItems: [
        "انتخاب بلیط هواپیما داخلی بر اساس ساعت حرکت",
        "انتخاب بر اساس نوع بلیط",
        "فیلتر بلیط ها بر اساس کلاس پروازی"
      ]
    }
  ];

  return (
    <div className="features-container">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3 className="feature-title">{feature.title}</h3>
            
            {feature.description && (
              <p className="feature-description">{feature.description}</p>
            )}
            
            {feature.subItems && (
              <ul className="feature-list">
                {feature.subItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .features-container {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          padding: 20px;
          box-sizing: border-box;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .feature-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          word-wrap: break-word;
          overflow-wrap: break-word;
          box-sizing: border-box;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a1a1a;
          line-height: 1.4;
          word-wrap: break-word;
        }

        .feature-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #4a4a4a;
          margin: 0;
          word-wrap: break-word;
        }

        .feature-list {
          margin: 12px 0 0 0;
          padding-right: 20px;
          list-style-position: inside;
        }

        .feature-list li {
          font-size: 0.9rem;
          line-height: 1.8;
          color: #4a4a4a;
          margin-bottom: 8px;
          word-wrap: break-word;
        }

        /* موبایل (عرض کمتر از 768px) */
        @media (max-width: 768px) {
          .features-container {
            padding: 16px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .feature-card {
            padding: 20px;
          }

          .feature-title {
            font-size: 1.1rem;
          }

          .feature-description,
          .feature-list li {
            font-size: 0.85rem;
          }
        }

        /* صفحه‌های خیلی کوچک (عرض کمتر از 480px) */
        @media (max-width: 480px) {
          .features-container {
            padding: 12px;
          }

          .feature-card {
            padding: 16px;
          }

          .feature-title {
            font-size: 1rem;
          }

          .feature-list {
            padding-right: 16px;
          }
        }

        /* برای ارتفاع کم (کمتر از 600px) */
        @media (max-height: 600px) {
          .features-grid {
            gap: 12px;
          }
          
          .feature-card {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Features;