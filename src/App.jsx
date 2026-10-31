import React, { useState, useEffect, useMemo, useRef } from 'react';


    

    function SvgIcon({ name, className = "w-5 h-5", fill = "none" }) {
      const icons = {
        Activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
        Calendar: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></g>,
        Flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
        Trophy: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7v2h10v-2h-2c-.55 0-1-.45-1-1v-2.34"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></g>,
        Layers: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 22 17"/><polyline points="2 12 12 17 22 12"/></g>,
        BarChart2: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></g>,
        Users: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></g>,
        Folder: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></g>,
        Plus: <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></g>,
        Settings: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></g>,
        ChevronRight: <polyline points="9 18 15 12 9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>,
        Check: <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>,
        Clock: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></g>,
        Heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
        Compass: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></g>,
        Flag: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></g>,
        ShieldCheck: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></g>,
        RefreshCw: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></g>,
        Sparkles: <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
        Key: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></g>,
        Edit3: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></g>,
        Trash2: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></g>,
        X: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></g>,
        Send: <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></g>
      };
      return (
        <svg className={className} viewBox="0 0 24 24" fill={fill}>
          {icons[name] || icons.Activity}
        </svg>
      );
    }

    function AutoScrollText({ text, className = '', title = text }) {
      const containerRef = useRef(null);
      const contentRef = useRef(null);
      const [isOverflowing, setIsOverflowing] = useState(false);

      useEffect(() => {
        const updateOverflow = () => {
          const container = containerRef.current;
          const content = contentRef.current;
          if (!container || !content) return;
          setIsOverflowing(content.scrollWidth > container.clientWidth);
        };

        updateOverflow();
        window.addEventListener('resize', updateOverflow);

        const resizeObserver = typeof ResizeObserver !== 'undefined'
          ? new ResizeObserver(updateOverflow)
          : null;
        if (resizeObserver && containerRef.current) resizeObserver.observe(containerRef.current);

        return () => {
          window.removeEventListener('resize', updateOverflow);
          resizeObserver?.disconnect();
        };
      }, [text]);

      return (
        <div ref={containerRef} className={`auto-scroll-text ${className}`} title={title}>
          <div ref={contentRef} className={isOverflowing ? 'auto-scroll-track is-scrolling' : ''}>
            <span className={isOverflowing ? 'auto-scroll-copy' : ''}>{text}</span>
            {isOverflowing && <span className="auto-scroll-copy" aria-hidden="true">{text}</span>}
          </div>
        </div>
      );
    }

    function calculateVDOT(timeInMinutes, distanceInMeters = 5000) {
      if (!timeInMinutes || timeInMinutes <= 0) return 30;
      const velocity = distanceInMeters / timeInMinutes;
      const vo2 = -4.60 + 0.182258 * velocity + 0.000104 * Math.pow(velocity, 2);
      const percentMax =
        0.8 +
        0.1894393 * Math.exp(-0.012778 * timeInMinutes) +
        0.2989558 * Math.exp(-0.1932605 * timeInMinutes);
      const vdot = vo2 / percentMax;
      return Math.max(15, Math.min(85, parseFloat(vdot.toFixed(1))));
    }

    function formatPace(secondsPerKm) {
      if (!secondsPerKm || isNaN(secondsPerKm) || secondsPerKm <= 0) return '0:00';
      const m = Math.floor(secondsPerKm / 60);
      const s = Math.round(secondsPerKm % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    function parsePaceToSeconds(paceStr) {
      if (!paceStr) return 360;
      const parts = paceStr.replace('/km', '').trim().split(':');
      if (parts.length === 2) {
        return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
      }
      return 360;
    }

    function calculatePaceZones(fiveKTimeMinutes) {
      const fiveKPaceSec = (fiveKTimeMinutes * 60) / 5;
      const easyLowSec = Math.round(fiveKPaceSec * 1.25);
      const easyHighSec = Math.round(fiveKPaceSec * 1.38);
      const thresholdLowSec = Math.round(fiveKPaceSec * 1.08);
      const thresholdHighSec = Math.round(fiveKPaceSec * 1.15);
      const marathonLowSec = Math.round(fiveKPaceSec * 1.16);
      const marathonHighSec = Math.round(fiveKPaceSec * 1.23);
      const intervalLowSec = Math.round(fiveKPaceSec * 0.95);
      const intervalHighSec = Math.round(fiveKPaceSec * 1.00);

      return {
        easy: `${formatPace(easyLowSec)} - ${formatPace(easyHighSec)}`,
        threshold: `${formatPace(thresholdLowSec)} - ${formatPace(thresholdHighSec)}`,
        marathon: `${formatPace(marathonLowSec)} - ${formatPace(marathonHighSec)}`,
        interval: `${formatPace(intervalLowSec)} - ${formatPace(intervalHighSec)}`,
        easyAvgSec: (easyLowSec + easyHighSec) / 2,
        thresholdAvgSec: (thresholdLowSec + thresholdHighSec) / 2,
        marathonAvgSec: (marathonLowSec + marathonHighSec) / 2
      };
    }

    const ALL_WEEK_DAYS = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];

    const UPCOMING_MAJOR_RACES = [
      {
        id: 'RACE-VPBANK-HN',
        name: 'VPBank Hanoi International Marathon',
        location: 'Hà Nội',
        date: '2026-10-18',
        defaultDistance: 'Full Marathon (42.2 km)',
        badge: 'Cung Đường Di Sản',
        imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1000&q=80',
        tip: 'Khí hậu mùa thu Hà Nội se mát lý tưởng để săn PR. Cung đường qua Hồ Gươm, cầu Long Biên; cần chú ý đoạn dốc lên dốc cầu.'
      },
      {
        id: 'RACE-VM-MIDNIGHT-HN',
        name: 'VnExpress Marathon Hanoi Midnight',
        location: 'Hà Nội',
        date: '2026-11-29',
        defaultDistance: 'Half Marathon (21.1 km)',
        badge: 'Giải Đêm Huyền Ảo',
        imageUrl: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=1000&q=80',
        tip: 'Chạy đêm lúc 0h - 3h sáng. Cần điều chỉnh đồng hồ sinh học trước 1 tuần và ăn bữa tối giàu carb trước 19h.'
      },
      {
        id: 'RACE-TCB-HCM',
        name: 'Techcombank TP. Hồ Chí Minh Marathon',
        location: 'TP. HCM',
        date: '2026-12-06',
        defaultDistance: 'Full Marathon (42.2 km)',
        badge: 'Đông VĐV Nhất VN',
        imageUrl: 'https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?auto=format&fit=crop&w=1000&q=80',
        tip: 'Thời tiết ấm và ẩm của TP.HCM; xuất phát từ sáng sớm. Chú ý dốc cầu Ba Son và bù điện giải liên tục mỗi 2.5km.'
      },
      {
        id: 'RACE-TIEN-PHONG',
        name: 'Tiền Phong Marathon & Cự Ly Dài VĐQG',
        location: 'Phú Yên',
        date: '2027-03-28',
        defaultDistance: 'Half Marathon (21.1 km)',
        badge: 'Giải VĐQG Danh Giá',
        imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1000&q=80',
        tip: 'Đặc sản gió biển duyên hải và bình minh tuyệt đẹp. Chiến thuật chia sức Conservative Start ở nửa đầu để tránh gió cản.'
      },
      {
        id: 'RACE-BERLIN',
        name: 'BMW Berlin Marathon (World Major)',
        location: 'Berlin, Đức',
        date: '2027-09-26',
        defaultDistance: 'Full Marathon (42.2 km)',
        badge: 'Kỷ Lục Thế Giới',
        imageUrl: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1000&q=80',
        tip: 'Đường chạy phẳng nhất thế giới qua Cổng Brandenburg huyền thoại. Nơi khai sinh các kỷ lục thế giới Marathon!'
      },
      {
        id: 'RACE-TOKYO',
        name: 'Tokyo Marathon (World Major)',
        location: 'Tokyo, Nhật Bản',
        date: '2027-03-07',
        defaultDistance: 'Full Marathon (42.2 km)',
        badge: 'Đỉnh Cao Châu Á',
        imageUrl: 'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&w=1000&q=80',
        tip: 'Giải chạy World Major danh giá nhất Châu Á. Hàng triệu khán giả tiếp lửa từ Shinjuku đến Tokyo Station.'
      }
    ];

    function getDayOfWeekFromDate(dateStr) {
      if (!dateStr) return 'Chủ Nhật';
      const [y, m, d] = dateStr.split('-').map(Number);
      const dateObj = new Date(y, m - 1, d);
      const dayIndex = dateObj.getDay();
      if (dayIndex === 0) return 'Chủ Nhật';
      return `Thứ ${dayIndex + 1}`;
    }

    function getVietnameseWeekdayIndex(dayName) {
      if (dayName === 'Chủ Nhật') return 6;
      const dayNumber = Number(String(dayName).replace('Thứ ', ''));
      return Number.isInteger(dayNumber) ? dayNumber - 2 : 0;
    }

    function addDays(date, days) {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }

    function startOfCurrentWeekMonday() {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const mondayOffset = (today.getDay() + 6) % 7;
      return addDays(today, -mondayOffset);
    }

    function formatDateAsISO(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    function formatDateForBadge(dateStr) {
      const parts = String(dateStr || '').split('-');
      if (parts.length !== 3) return '';
      return `${parts[2]}/${parts[1]}`;
    }

    function getDistanceKm(distanceStr, customDistance) {
      if (distanceStr.includes('5K')) return 5.0;
      if (distanceStr.includes('10K')) return 10.0;
      if (distanceStr.includes('Half Marathon')) return 21.0975;
      if (distanceStr.includes('Full Marathon')) return 42.195;
      if (customDistance && parseFloat(customDistance)) return parseFloat(customDistance);
      return 21.0975;
    }

    function generateDefaultTrainingPlan(
      distanceStr,
      targetTimeStr,
      raceDateStr,
      vdot,
      availableDays = ['Thứ 3', 'Thứ 5', 'Thứ 7', 'Chủ Nhật'],
      targetRacePace = '5:41',
      paceZonesObj = null
    ) {
      const [raceYear, raceMonth, raceDay] = String(raceDateStr || '').split('-').map(Number);
      const raceTarget = raceYear && raceMonth && raceDay ? new Date(raceYear, raceMonth - 1, raceDay) : new Date();
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      raceTarget.setHours(0, 0, 0, 0);
      const daysRemaining = Math.max(0, Math.ceil((raceTarget - today) / 86400000));
      const weeksCount = Math.max(1, Math.ceil(daysRemaining / 7));
      const weeks = [];
      const phases = [
        'Nền Tảng Cơ Sở (Base Building)',
        'Phát Triển Ngưỡng & Tốc Độ Mục Tiêu (Build & MP)',
        'Đỉnh Cao Thể Lực & Mô Phỏng Giải (Peak & Race Simulation)',
        'Giảm Tải & Sẵn Sàng Thi Đấu (Taper & Race)'
      ];
      const activeDaysList = availableDays.length > 0 ? availableDays : ['Thứ 4', 'Chủ Nhật'];
      const runsCount = activeDaysList.length;
      const targetKm = getDistanceKm(distanceStr, '');
      const raceDayOfWeek = getDayOfWeekFromDate(raceDateStr);
      const planStartMonday = startOfCurrentWeekMonday();

      const easyPaceDisplay = paceZonesObj?.easy || '7:40 - 8:30';
      const thresholdPaceDisplay = paceZonesObj?.threshold || '6:25 - 6:45';

      for (let w = 1; w <= weeksCount; w++) {
        const phaseIndex = Math.min(3, Math.floor((w - 1) / 3));
        const isRaceWeek = w === weeksCount;
        const isTaper = weeksCount > 1 && w > Math.max(1, weeksCount - 3);
        const weekStartMonday = addDays(planStartMonday, (w - 1) * 7);

        const distScale = targetKm >= 40 ? 1.4 : targetKm >= 20 ? 1.0 : targetKm >= 10 ? 0.75 : 0.55;
        const baseScale = runsCount === 1 ? 0.35 : runsCount === 2 ? 0.6 : runsCount === 3 ? 0.8 : runsCount === 4 ? 1.0 : 1.18;

        let weeklyMileage = Math.round((isRaceWeek ? 18 : isTaper ? 26 : (26 + (w - 1) * 2.8)) * baseScale * distScale);
        weeklyMileage = Math.max(12, weeklyMileage);

        const tempoKm = Math.max(4, Math.round(weeklyMileage * 0.28));
        const easyKm = Math.max(3, Math.round(weeklyMileage * 0.24));
        const stridesKm = Math.max(3, Math.round(weeklyMileage * 0.2));
        const longKm = Math.max(
          Math.round(targetKm * 0.35),
          Math.min(Math.round(targetKm * 0.82), Math.round(weeklyMileage * 0.45))
        );
        const intervalReps = phaseIndex === 0 ? 3 : phaseIndex === 1 ? 4 : phaseIndex === 2 ? 5 : 3;

        const createQualityWorkout = () => {
          if (isRaceWeek) {
            return {
              title: 'Khởi Động Làm Nóng Khóa Nhịp (Pre-Race Sharpener)',
              distance: '3.5 km',
              pace: `${targetRacePace} /km (Race Pace)`,
              desc: `• Khởi động nhẹ nhàng Zone 2 - 1.5 km - Pace ${easyPaceDisplay} /km - 1 lần\n• Kích hoạt guồng chân đúng Target Pace - 0.5 km - Đúng Pace ${targetRacePace} /km - 2 lần (nghỉ 90s)\n• Thả lỏng giãn cơ nhẹ - 1.0 km - Thư giãn - 1 lần`,
              type: 'Tempo',
              completed: false
            };
          }

          if (phaseIndex === 0) {
            return {
              title: 'Chạy Ngưỡng Tốc Độ (Threshold Interval)',
              distance: `${tempoKm} km`,
              pace: `${thresholdPaceDisplay} /km`,
              desc: `• Khởi động làm nóng cơ - 1.5 km - Pace ${easyPaceDisplay} /km - 1 lần\n• Chạy tốc độ ngưỡng hiếu khí - 1.0 km - Pace ${thresholdPaceDisplay} /km - ${intervalReps} lần (nghỉ 90s giữa hiệp)\n• Chạy xả cơ & Hạ nhiệt - 1.0 km - Pace ${easyPaceDisplay} /km - 1 lần`,
              type: 'Tempo',
              completed: false
            };
          } else if (phaseIndex === 1) {
            const mpBlockKm = Math.max(3, tempoKm - 3);
            return {
              title: `Chạy Nhịp Điệu Mục Tiêu (Goal Marathon Pace - MP)`,
              distance: `${tempoKm} km`,
              pace: `${targetRacePace} /km (Target Pace)`,
              desc: `• Khởi động làm nóng khớp - 1.5 km - Pace ${easyPaceDisplay} /km - 1 lần\n• Chạy đều nhịp Target Pace mục tiêu ${targetTimeStr} - ${mpBlockKm} km - Đúng Pace ${targetRacePace} /km - 1 lần (Guồng chân 175-180 spm)\n• Chạy thả lỏng phục hồi - 1.5 km - Pace ${easyPaceDisplay} /km - 1 lần`,
              type: 'Tempo',
              completed: false
            };
          } else if (phaseIndex === 2) {
            return {
              title: `Biến Tốc Cruise & Khóa Nhịp Đua (Target Pace Sharpener)`,
              distance: `${tempoKm} km`,
              pace: `${thresholdPaceDisplay} & ${targetRacePace} /km`,
              desc: `• Khởi động Zone 2 - 2.0 km - Pace ${easyPaceDisplay} /km - 1 lần\n• Tốc độ vượt ngưỡng tạo đệm thể lực - 1.0 km - Pace ${thresholdPaceDisplay} /km - ${intervalReps} lần (nghỉ 90s)\n• Khóa nhịp tốc độ thi đấu mục tiêu - 2.0 km - Đúng Target Pace ${targetRacePace} /km - 1 lần\n• Thả lỏng - 1.0 km - Thư giãn - 1 lần`,
              type: 'Tempo',
              completed: false
            };
          } else {
            return {
              title: `Chạy Giữ Cảm Giác Tốc Độ (Taper Race Pace Tune-up)`,
              distance: `${Math.max(4, Math.round(tempoKm * 0.7))} km`,
              pace: `${targetRacePace} /km (Target MP)`,
              desc: `• Khởi động làm nóng - 1.5 km - Pace ${easyPaceDisplay} /km - 1 lần\n• Lặp lại đoạn ngắn tốc độ mục tiêu - 1.0 km - Đúng Pace ${targetRacePace} /km - 2 lần (nghỉ 2 phút)\n• Thả lỏng - 1.0 km - Đi bộ/Jog nhẹ - 1 lần`,
              type: 'Tempo',
              completed: false
            };
          }
        };

        const createLongWorkout = () => {
          if (isRaceWeek) {
            return {
              title: 'Chạy Thả Lỏng Taper Dưỡng Sức',
              distance: '4.0 km',
              pace: `${easyPaceDisplay} /km`,
              desc: `• Khởi động xoay khớp - 0.5 km - Nhẹ nhàng - 1 lần\n• Chạy thả lỏng dưỡng sức trước ngày đua - 3.0 km - Pace ${easyPaceDisplay} /km - 1 lần\n• Đi bộ giãn cơ và nạp đủ carb, đi ngủ sớm - 0.5 km - Thả lỏng - 1 lần`,
              type: 'LongRun',
              completed: false
            };
          }

          if (phaseIndex === 0) {
            return {
              title: 'Chạy Dài Sức Bền Nền Tảng (Base Long Run)',
              distance: `${longKm} km`,
              pace: `${easyPaceDisplay} /km`,
              desc: `• Khởi động bắt nhịp hiếu khí - 1.0 km - Pace ${easyPaceDisplay} /km - 1 lần\n• Chạy dài hiếu khí Zone 2 đường trường - ${Math.max(4, longKm - 2)} km - Pace ${easyPaceDisplay} /km - 1 lần (Uống nước mỗi 2.5km, nạp 1 Gel ở phút 45)\n• Đi bộ xả cơ & Ép dẻo tĩnh - 1.0 km - Thả lỏng - 1 lần`,
              type: 'LongRun',
              completed: false
            };
          } else if (phaseIndex === 1) {
            const finishKm = Math.min(6, Math.max(3, Math.round(longKm * 0.25)));
            const baseKm = Math.max(4, longKm - finishKm - 1);
            return {
              title: `Chạy Dài Tăng Tốc Về Đích (Fast-Finish Long Run)`,
              distance: `${longKm} km`,
              pace: `${easyPaceDisplay} -> ${targetRacePace} /km`,
              desc: `• Khởi động & tích lũy hiếu khí - ${baseKm} km - Pace ${easyPaceDisplay} /km - 1 lần (Nạp Gel mỗi 45 phút)\n• Bứt tốc Fast-Finish mô phỏng giai đoạn cuối giải - ${finishKm} km - Đúng Target Pace ${targetRacePace} /km - 1 lần\n• Đi bộ hạ nhiệt cơ bắp - 1.0 km - Thả lỏng - 1 lần`,
              type: 'LongRun',
              completed: false
            };
          } else if (phaseIndex === 2) {
            const simKm = Math.min(10, Math.max(5, Math.round(longKm * 0.35)));
            const baseKm = Math.max(6, longKm - simKm - 1);
            return {
              title: `Mô Phỏng Thi Đấu Thực Tế (Race Simulation Long Run)`,
              distance: `${longKm} km`,
              pace: `${easyPaceDisplay} & ${targetRacePace} /km (Race Simulation)`,
              desc: `• Chạy đường trường Zone 2 xây sức bền - ${baseKm} km - Pace ${easyPaceDisplay} /km - 1 lần (Uống nước mỗi 2.5km)\n• Chạy khối nhịp đua thực chiến mục tiêu ${targetTimeStr} - ${simKm} km - Giữ vững Pace ${targetRacePace} /km - 1 lần\n• Đi bộ xả cơ và bù điện giải - 1.0 km - Thư giãn - 1 lần`,
              type: 'LongRun',
              completed: false
            };
          } else {
            return {
              title: `Chạy Dài Giảm Tải Dưỡng Sức (Taper Long Run)`,
              distance: `${longKm} km`,
              pace: `${easyPaceDisplay} /km`,
              desc: `• Khởi động nhẹ nhàng - 1.0 km - Pace ${easyPaceDisplay} /km - 1 lần\n• Chạy thả lỏng hiếu khí thư giãn - ${Math.max(3, longKm - 2)} km - Pace ${easyPaceDisplay} /km - 1 lần\n• Thả lỏng giãn cơ toàn thân - 1.0 km - Thư giãn - 1 lần`,
              type: 'LongRun',
              completed: false
            };
          }
        };

        const createEasyWorkout = () => ({
          title: 'Chạy Phục Hồi Nhẹ (Easy Run)',
          distance: `${easyKm} km`,
          pace: `${easyPaceDisplay} /km`,
          desc: `• Khởi động khớp & Ép dẻo động - 0.5 km - Đi bộ / Jog nhẹ - 1 lần\n• Chạy phục hồi nhịp tim Zone 2 - ${Math.max(2.5, easyKm - 1)} km - Pace ${easyPaceDisplay} /km - 1 lần (nhịp thở 3:3)\n• Đi bộ hạ nhiệt & Thả lỏng - 0.5 km - Thư giãn - 1 lần`,
          type: 'Easy',
          completed: false
        });

        const createStridesWorkout = () => ({
          title: 'Chạy Thả Lỏng & Strides Tốc Độ',
          distance: `${stridesKm} km`,
          pace: `${easyPaceDisplay} /km`,
          desc: `• Chạy thả lỏng hiếu khí - ${Math.max(2.5, stridesKm - 1)} km - Pace ${easyPaceDisplay} /km - 1 lần\n• Bứt tốc sải chân kỹ thuật (Strides) - 0.1 km (100m) - Tăng tốc nhịp nhàng - 4 lần (nghỉ đi bộ 60s)\n• Đi bộ hạ nhiệt cơ bắp - 0.5 km - Thả lỏng - 1 lần`,
          type: 'Easy',
          completed: false
        });

        const createRaceDayWorkout = () => ({
          title: `🏁 RACE DAY: GIẢI CHẠY CHÍNH THỨC (${distanceStr})`,
          distance: `${targetKm.toFixed(1)} km`,
          pace: `${targetRacePace} /km (Target Mục Tiêu ${targetTimeStr})`,
          desc: `• Khởi động làm nóng tại vạch xuất phát - 1.0 km - Nhẹ nhàng - 1 lần (15 phút trước giờ G)\n• THI ĐẤU CHÍNH THỨC: Chạy đúng chiến thuật - ${targetKm.toFixed(1)} km - Target Pace ${targetRacePace} /km - 1 lần (Cán đích Sub ${targetTimeStr})\n• CÁN ĐÍCH FINISHER & Nhận Huy Chương: Đi bộ thả lỏng, uống điện giải & giãn cơ - 0.5 km - Tự hào - 1 lần`,
          type: 'RaceDay',
          completed: false
        });

        let activeDayIndex = 0;
        const days = ALL_WEEK_DAYS.map(dayName => {
          if (isRaceWeek && dayName === raceDayOfWeek) {
            return { day: dayName, ...createRaceDayWorkout() };
          }
          const isSelectedDay = activeDaysList.includes(dayName);
          if (!isSelectedDay) {
            return {
              day: dayName,
              title: 'Nghỉ Ngơi Tích Cực / Giãn Cơ',
              distance: '0 km',
              pace: '--',
              desc: '• Nghỉ ngơi tích cực tái tạo cơ bắp - 0.0 km - Thư giãn - 1 lần\n• Lăn ống Foam Roll & Giãn cơ - 0.0 km - Nhẹ nhàng - 1 lần (15 phút)',
              type: 'Rest',
              completed: false
            };
          }
          let workout;
          if (runsCount === 1) {
            workout = createLongWorkout();
          } else if (runsCount === 2) {
            workout = activeDayIndex === 0 ? createQualityWorkout() : createLongWorkout();
          } else if (runsCount === 3) {
            if (activeDayIndex === 0) workout = createEasyWorkout();
            else if (activeDayIndex === 1) workout = createQualityWorkout();
            else workout = createLongWorkout();
          } else if (runsCount === 4) {
            if (activeDayIndex === 0) workout = createEasyWorkout();
            else if (activeDayIndex === 1) workout = createQualityWorkout();
            else if (activeDayIndex === 2) workout = createStridesWorkout();
            else workout = createLongWorkout();
          } else {
            const roles = [createEasyWorkout, createQualityWorkout, createEasyWorkout, createStridesWorkout, createLongWorkout];
            workout = roles[activeDayIndex % roles.length]();
          }
          activeDayIndex++;
          return { day: dayName, ...workout };
        });
        days.forEach((day, dayIndex) => {
          let workoutDate;
          if (isRaceWeek && day.day === raceDayOfWeek) {
            workoutDate = raceTarget;
          } else {
            workoutDate = addDays(weekStartMonday, dayIndex);
          }
          day.date = formatDateAsISO(workoutDate);
        });

        const totalWeekKm = days.reduce((sum, d) => sum + (parseFloat(d.distance) || 0), 0);

        weeks.push({
          weekNumber: w,
          phase: isRaceWeek ? '🏁 TUẦN THI ĐẤU CHÍNH THỨC (RACE WEEK)' : phases[phaseIndex],
          weeklyKm: Math.round(totalWeekKm),
          focus: isRaceWeek
            ? `Tập trung ngày thi đấu: ${raceDateStr} (${raceDayOfWeek}). Chinh phục mục tiêu ${targetTimeStr} (Target Pace: ${targetRacePace}/km)!`
            : phaseIndex === 0
              ? `Xây móng hiếu khí vững chắc ở Easy Pace (${easyPaceDisplay})`
              : phaseIndex === 1
                ? `Khóa nhịp Marathon Pace: Bắt đầu đưa Target Pace ${targetRacePace} /km vào bài tập`
                : phaseIndex === 2
                  ? `Mô phỏng thi đấu: Chạy dài có đoạn ở đúng Target Pace ${targetRacePace} /km & thực hành nạp Gel`
                  : `Giữ độ nhạy cơ bắp ở Target Pace ${targetRacePace} /km và giảm tải khối lượng (Taper)`,
          days
        });
      }

      return {
        targetDistance: distanceStr || 'Half Marathon (21.1 km)',
        targetTime: targetTimeStr || '02:00',
        raceDate: raceDateStr || '2026-11-29',
        calculatedVDOT: vdot || 36.6,
        totalWeeks: weeksCount,
        availableDays: activeDaysList,
        targetRacePace: targetRacePace || '5:41',
        generatedBy: `Thuật toán Chu Kỳ VDOT & Marathon Pace (${targetRacePace}/km)`,
        weeks
      };
    }

    function App() {
      const [step, setStep] = useState(1);
      const [activeTab, setActiveTab] = useState('home');

      // AI Key & Status
      const [geminiApiKey, setGeminiApiKey] = useState(() => localStorage.getItem('runcoach_gemini_api_key') || '');
      const [showAiModal, setShowAiModal] = useState(false);
      const [aiEngineStatus, setAiEngineStatus] = useState({
        modelName: 'gemini-3-flash',
        isLive: true,
        lastChecked: 'Sẵn sàng'
      });

      // Modals
      const [showCommunityModal, setShowCommunityModal] = useState(false);
      const [showSettingsModal, setShowSettingsModal] = useState(false);

      // Athlete Profiles
      const [athleteId, setAthleteId] = useState('PACER-DEMO');
      const [athleteName, setAthleteName] = useState('Văn Đồng Viên Pacer');
      const [savedAthletes, setSavedAthletes] = useState(() => {
        const local = localStorage.getItem('runcoach_all_athletes');
        return local ? JSON.parse(local) : [
          { id: 'PACER-DEMO', name: 'Văn Đồng Viên Pacer' },
          { id: 'HOANG-SUB2', name: 'Hoàng Runner' }
        ];
      });
      const [showAthleteModal, setShowAthleteModal] = useState(false);
      const [newAthleteNameInput, setNewAthleteNameInput] = useState('');
      const [newAthleteIdInput, setNewAthleteIdInput] = useState('');
      const [copyNotification, setCopyNotification] = useState(false);

      // Step 1: Physical Profile
      const [gender, setGender] = useState('Nam (Male)');
      const [age, setAge] = useState(27);
      const [height, setHeight] = useState(170);
      const [weight, setWeight] = useState(65);
      const [fiveKHours, setFiveKHours] = useState(0);
      const [fiveKMinutes, setFiveKMinutes] = useState(26);
      const [availableDays, setAvailableDays] = useState(['Thứ 3', 'Thứ 5', 'Thứ 7', 'Chủ Nhật']);
      const [dayPresetLimit, setDayPresetLimit] = useState(4);
      const runsPerWeek = useMemo(() => availableDays.length, [availableDays]);

      // Step 2: Goal & Race
      const [selectedDistance, setSelectedDistance] = useState('Full Marathon (42.2 km)');
      const [customDistance, setCustomDistance] = useState('');
      const [targetHours, setTargetHours] = useState(4);
      const [targetMinutes, setTargetMinutes] = useState(30);
      const [raceDate, setRaceDate] = useState('2026-11-29');
      const [showCustomRaceModal, setShowCustomRaceModal] = useState(false);
      const [customRaceTitle, setCustomRaceTitle] = useState('');
      const [customRaceName, setCustomRaceName] = useState('');
      const [customRaceLocation, setCustomRaceLocation] = useState('');
      const [customRaceDate, setCustomRaceDate] = useState('');
      const [customRaceDistances, setCustomRaceDistances] = useState(['5K']);
      const [customRaces, setCustomRaces] = useState(() => {
        try {
          return JSON.parse(localStorage.getItem('runcoach_custom_races') || '[]');
        } catch {
          return [];
        }
      });

      const handleAddCustomRace = () => {
        if (!customRaceTitle.trim() || !customRaceName.trim() || !customRaceLocation.trim() || !customRaceDate || customRaceDistances.length === 0) return;

        const distanceMap = {
          '5K': '5K (5.0 km)',
          '10K': '10K (10.0 km)',
          '21K': 'Half Marathon (21.1 km)',
          '42K': 'Full Marathon (42.2 km)'
        };
        const newRace = {
          id: `CUSTOM-RACE-${Date.now()}`,
          title: customRaceTitle.trim(),
          name: customRaceName.trim(),
          location: customRaceLocation.trim(),
          date: customRaceDate,
          distances: [...customRaceDistances],
          defaultDistance: distanceMap[customRaceDistances[0]],
          badge: customRaceTitle.trim(),
          imageUrl: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1200&q=90',
          tip: 'Giữ kỷ luật chiến thuật và nạp điện giải đều đặn.'
        };
        const updated = [...customRaces, newRace];
        setCustomRaces(updated);
        localStorage.setItem('runcoach_custom_races', JSON.stringify(updated));
        setRaceDate(newRace.date);
        setSelectedDistance(newRace.defaultDistance);
        setCustomRaceTitle('');
        setCustomRaceName('');
        setCustomRaceLocation('');
        setCustomRaceDate('');
        setCustomRaceDistances(['5K']);
        setShowCustomRaceModal(false);
      };

      // Step 3: Training Plan
      const [trainingPlan, setTrainingPlan] = useState(null);
      const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);
      const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
      const weekListRef = useRef(null);

      // Step 4: Race Tactic
      const [selectedRaceTactic, setSelectedRaceTactic] = useState('negative');

      // Step 5: Hovered week
      const [hoveredWeekIdx, setHoveredWeekIdx] = useState(null);

      // Multi-Plan Management State per Athlete
      const getAthletePlans = (athId) => {
        const local = localStorage.getItem(`runcoach_plans_${athId}`);
        if (local) {
          try { return JSON.parse(local); } catch (e) { console.error(e); }
        }
        if (athId === 'HOANG-SUB2') {
          return [
            {
              id: `PLAN-HOANG-1`,
              title: 'Half Marathon VnExpress Sub 2:00',
              distance: 'Half Marathon (21.1 km)',
              targetTime: '02:00',
              targetPace: '5:41',
              raceDate: '2026-11-29',
              availableDays: ['Thứ 3', 'Thứ 5', 'Thứ 7', 'Chủ Nhật']
            }
          ];
        }
        return [
          {
            id: `PLAN-${athId}-FM`,
            title: 'Mùa Giải 2026: Full Marathon Sub 4:30',
            distance: 'Full Marathon (42.2 km)',
            targetTime: '04:30',
            targetPace: '6:24',
            raceDate: '2026-11-29',
            availableDays: ['Thứ 3', 'Thứ 5', 'Thứ 7', 'Chủ Nhật']
          },
          {
            id: `PLAN-${athId}-HM`,
            title: 'Mùa Giải 2027: Half Marathon Sub 2:00',
            distance: 'Half Marathon (21.1 km)',
            targetTime: '02:00',
            targetPace: '5:41',
            raceDate: '2027-03-21',
            availableDays: ['Thứ 4', 'Thứ 7', 'Chủ Nhật']
          }
        ];
      };

      const [savedPlans, setSavedPlans] = useState(() => getAthletePlans('PACER-DEMO'));
      const [activePlanId, setActivePlanId] = useState('PLAN-PACER-DEMO-FM');
      const [showNewPlanForm, setShowNewPlanForm] = useState(false);
      const [newPlanTitle, setNewPlanTitle] = useState('');
      const [newPlanDistance, setNewPlanDistance] = useState('Full Marathon (42.2 km)');
      const [newPlanHours, setNewPlanHours] = useState(4);
      const [newPlanMinutes, setNewPlanMinutes] = useState(30);
      const [newPlanDate, setNewPlanDate] = useState('2026-11-29');
      const [newPlanDays, setNewPlanDays] = useState(['Thứ 3', 'Thứ 5', 'Thứ 7', 'Chủ Nhật']);

      const handleToggleDay = (dayName) => {
        setAvailableDays(prev => {
          if (prev.includes(dayName)) {
            if (prev.length <= 1) return prev;
            return prev.filter(d => d !== dayName);
          } else {
            if (prev.length >= dayPresetLimit) return prev;
            return [...prev, dayName];
          }
        });
      };

      const handleSelectDaysPreset = (preset) => {
        setDayPresetLimit(preset);
        if (preset === 2) setAvailableDays(['Thứ 4', 'Chủ Nhật']);
        else if (preset === 3) setAvailableDays(['Thứ 3', 'Thứ 6', 'Chủ Nhật']);
        else if (preset === 4) setAvailableDays(['Thứ 3', 'Thứ 5', 'Thứ 7', 'Chủ Nhật']);
        else if (preset === 5) setAvailableDays(['Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 7', 'Chủ Nhật']);
        else if (preset === 6) setAvailableDays(['Thứ 2', 'Thứ 3', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật']);
      };

      const total5KMinutes = useMemo(() => fiveKHours * 60 + fiveKMinutes, [fiveKHours, fiveKMinutes]);
      const currentVDOT = useMemo(() => calculateVDOT(total5KMinutes, 5000), [total5KMinutes]);
      const paceZones = useMemo(() => calculatePaceZones(total5KMinutes), [total5KMinutes]);
      const calculated5KPace = useMemo(() => formatPace((total5KMinutes * 60) / 5), [total5KMinutes]);
      const calculatedSpeedKmh = useMemo(() => total5KMinutes <= 0 ? '0.0' : (5 / (total5KMinutes / 60)).toFixed(1), [total5KMinutes]);
      const targetKmNumber = useMemo(() => getDistanceKm(selectedDistance, customDistance), [selectedDistance, customDistance]);
      const targetRacePace = useMemo(() => {
        const totalTargetSec = (targetHours * 60 + targetMinutes) * 60;
        return formatPace(totalTargetSec / targetKmNumber);
      }, [targetHours, targetMinutes, targetKmNumber]);
      const targetRacePaceSec = useMemo(() => parsePaceToSeconds(targetRacePace), [targetRacePace]);
      const allRaceOptions = useMemo(
        () => [...UPCOMING_MAJOR_RACES, ...customRaces],
        [customRaces]
      );
      const getRaceDistanceOptions = (race) => {
        if (race.id === 'RACE-BERLIN' || race.id === 'RACE-TOKYO') return [];

        const distanceMap = {
          '5K': { label: '5K', value: '5K (5.0 km)' },
          '10K': { label: '10K', value: '10K (10.0 km)' },
          '21K': { label: 'Half', value: 'Half Marathon (21.1 km)' },
          '42K': { label: 'Full', value: 'Full Marathon (42.2 km)' },
          '5K (5.0 km)': { label: '5K', value: '5K (5.0 km)' },
          '10K (10.0 km)': { label: '10K', value: '10K (10.0 km)' },
          'Half Marathon (21.1 km)': { label: 'Half', value: 'Half Marathon (21.1 km)' },
          'Full Marathon (42.2 km)': { label: 'Full', value: 'Full Marathon (42.2 km)' }
        };

        const values = race.distances || ['5K', '10K', '21K', '42K'];
        return values.map(distance => distanceMap[distance]).filter(Boolean);
      };

      const activeRaceDetails = useMemo(() => {
        const matched = allRaceOptions.find(r => r.date === raceDate || r.id === raceDate);
        if (matched) return matched;
        return {
          id: 'CUSTOM-RACE',
          name: `${selectedDistance} Championship`,
          location: 'Đường Chạy Mục Tiêu',
          badge: 'Giải Đấu Chính Thức',
          imageUrl: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1200&q=90',
          tip: 'Giữ kỷ luật chiến thuật và nạp điện giải đều đặn.'
        };
      }, [raceDate, selectedDistance, allRaceOptions]);

      const raceDateDetails = useMemo(() => {
        if (!raceDate) return { formattedDate: 'Chưa chọn', dayOfWeek: 'Chủ Nhật', totalWeeks: 0, totalDays: 0 };
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const [year, month, day] = raceDate.split('-').map(Number);
        const target = new Date(year, month - 1, day);
        target.setHours(0, 0, 0, 0);
        const diffDays = Math.max(0, Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
        const totalWeeks = Math.max(1, Math.round(diffDays / 7));
        const dayOfWeekNames = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
        const dayOfWeekShort = target.getDay() === 0 ? 'Chủ Nhật' : `Thứ ${target.getDay() + 1}`;
        return {
          formattedDate: `${dayOfWeekNames[target.getDay()]}, ngày ${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
          dayOfWeek: dayOfWeekShort,
          totalWeeks,
          totalDays: diffDays
        };
      }, [raceDate]);

      const dynamicRaceSplits = useMemo(() => {
        const dist = targetKmNumber;
        let s1End = dist <= 6 ? 1.5 : dist <= 12 ? 2.5 : dist <= 25 ? 5.0 : 10.0;
        let s2End = dist <= 6 ? 4.0 : dist <= 12 ? 8.0 : dist <= 25 ? 16.0 : 32.0;

        let p1 = selectedRaceTactic === 'negative' ? targetRacePaceSec + 7 : selectedRaceTactic === 'even' ? targetRacePaceSec : targetRacePaceSec + 12;
        let p2 = selectedRaceTactic === 'negative' ? targetRacePaceSec : selectedRaceTactic === 'even' ? targetRacePaceSec : targetRacePaceSec + 4;
        let p3 = selectedRaceTactic === 'negative' ? targetRacePaceSec - 7 : selectedRaceTactic === 'even' ? targetRacePaceSec : targetRacePaceSec - 4;

        const getNut = (s) => {
          if (dist <= 6) return s === 3 ? 'Rút đích! Không cần nạp Gel.' : 'Uống 1 ngụm nước nhỏ tại trạm.';
          if (dist <= 12) return s === 2 ? 'Nạp 1 gói Gel ở km 5 + nước.' : 'Bù nước điện giải đều đặn.';
          if (dist <= 25) return s === 2 ? 'Nạp Gel 1 (km 8) & Gel 2 (km 15).' : s === 3 ? 'Nạp Gel 3 Caffeine (km 18).' : 'Uống nước nhỏ giọt mỗi 2.5km.';
          return s === 2 ? 'Nạp Gel mỗi 8km (km 16, 24, 32) + muối.' : s === 3 ? 'Nạp Gel 5 (km 37) bứt phá về đích.' : 'Uống nước đều, nạp Gel 1 ở km 8.';
        };

        return [
          { stageName: `Km 0 - ${s1End.toFixed(1)}`, paceDesc: `${formatPace(p1)} /km`, status: 'Bắt nhịp hiếu khí, kiểm soát nhịp tim Zone 2-3', nutrition: getNut(1) },
          { stageName: `Km ${s1End.toFixed(1)} - ${s2End.toFixed(1)}`, paceDesc: `${formatPace(p2)} /km`, status: 'Pace nhịp điệu (Cruising Rhythm), guồng chân 175-180 spm', nutrition: getNut(2) },
          { stageName: `Km ${s2End.toFixed(1)} - Đích (${dist.toFixed(1)} km)`, paceDesc: `${formatPace(p3)} /km`, status: 'Bứt phá rút đích mạnh mẽ!', nutrition: getNut(3) }
        ];
      }, [targetKmNumber, targetRacePaceSec, selectedRaceTactic]);

      useEffect(() => {
        const stored = localStorage.getItem(`runcoach_${athleteId}`);
        let restoredValidPlan = false;
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            if (
              parsed.trainingPlan &&
              Array.isArray(parsed.trainingPlan.weeks) &&
              parsed.trainingPlan.weeks.length > 0 &&
              parsed.trainingPlan.weeks.every(w => Array.isArray(w.days))
            ) {
              restoredValidPlan = true;
              setTrainingPlan(parsed.trainingPlan);
              if (parsed.trainingPlan.availableDays) setAvailableDays(parsed.trainingPlan.availableDays);
              if (parsed.selectedDistance) setSelectedDistance(parsed.selectedDistance);
              if (parsed.targetHours !== undefined) setTargetHours(parsed.targetHours);
              if (parsed.targetMinutes !== undefined) setTargetMinutes(parsed.targetMinutes);
              if (parsed.raceDate) setRaceDate(parsed.raceDate);
            }
          } catch (e) { console.error(e); }
        }
        if (!restoredValidPlan) {
          const defaultPlan = generateDefaultTrainingPlan(
            selectedDistance, `${targetHours.toString().padStart(2, '0')}:${targetMinutes.toString().padStart(2, '0')}`, raceDate, currentVDOT, availableDays, targetRacePace, paceZones
          );
          setTrainingPlan(defaultPlan);
        }
        const plans = getAthletePlans(athleteId);
        setSavedPlans(plans);
        if (plans.length > 0) setActivePlanId(plans[0].id);
      }, [athleteId]);

      useEffect(() => {
        if (trainingPlan) {
          const dataToSave = { athleteId, athleteName, selectedDistance, targetHours, targetMinutes, raceDate, trainingPlan };
          localStorage.setItem(`runcoach_${athleteId}`, JSON.stringify(dataToSave));
        }
      }, [trainingPlan, athleteId, athleteName, selectedDistance, targetHours, targetMinutes, raceDate]);

      useEffect(() => {
        if (!trainingPlan || !Array.isArray(trainingPlan.weeks) || trainingPlan.weeks.length === 0) {
          if (selectedWeekIndex !== 0) setSelectedWeekIndex(0);
          return;
        }
        if (selectedWeekIndex < 0 || selectedWeekIndex >= trainingPlan.weeks.length) {
          setSelectedWeekIndex(trainingPlan.weeks.length - 1);
        }
      }, [trainingPlan, selectedWeekIndex]);

      useEffect(() => {
        localStorage.setItem(`runcoach_plans_${athleteId}`, JSON.stringify(savedPlans));
      }, [savedPlans, athleteId]);

      useEffect(() => {
        localStorage.setItem('runcoach_all_athletes', JSON.stringify(savedAthletes));
      }, [savedAthletes]);

      const handleSwitchAthlete = (ath) => {
        setAthleteId(ath.id);
        setAthleteName(ath.name);
        setShowAthleteModal(false);
      };

      const handleDeleteAthlete = (e, targetId) => {
        e.stopPropagation();
        if (savedAthletes.length <= 1) return;
        const updated = savedAthletes.filter(a => a.id !== targetId);
        setSavedAthletes(updated);
        localStorage.removeItem(`runcoach_${targetId}`);
        localStorage.removeItem(`runcoach_plans_${targetId}`);
        if (athleteId === targetId && updated.length > 0) {
          handleSwitchAthlete(updated[0]);
        }
      };

      useEffect(() => {
        const list = weekListRef.current;
        if (!list) return;
        const item = list.querySelector(`[data-week-index="${selectedWeekIndex}"]`);
        if (!item) return;

        const listRect = list.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top < listRect.top) {
          list.scrollTop -= listRect.top - itemRect.top;
        } else if (itemRect.bottom > listRect.bottom) {
          list.scrollTop += itemRect.bottom - listRect.bottom;
        }
      }, [selectedWeekIndex, trainingPlan?.weeks?.length]);

      const handleToggleWorkoutComplete = (wIdx, dIdx, workoutDate = null) => {
        if (!trainingPlan) return;
        if (workoutDate && workoutDate > formatDateAsISO(new Date())) return;
        const updated = JSON.parse(JSON.stringify(trainingPlan));
        const targetDay = updated.weeks[wIdx].days[dIdx];
        targetDay.completed = !targetDay.completed;
        if (targetDay.completed) {
          if (!targetDay.actualKm) targetDay.actualKm = String(parseFloat(targetDay.distance) || 5.0);
          if (!targetDay.actualPace && targetDay.pace !== '--') targetDay.actualPace = targetDay.pace.split(' ')[0] || targetRacePace;
        }
        setTrainingPlan(updated);
      };

      const handleSyncAllPlans = () => {
        const distName = selectedDistance.includes('Khác') ? customDistance || 'Cự ly tùy chỉnh' : selectedDistance;
        const targetTimeFormatted = `${targetHours.toString().padStart(2, '0')}:${targetMinutes.toString().padStart(2, '0')}`;
        const newPlan = generateDefaultTrainingPlan(
          distName, targetTimeFormatted, raceDate, currentVDOT, availableDays, targetRacePace, paceZones
        );
        setTrainingPlan(newPlan);
      };

      const handleSelectPlan = (planItem) => {
        setActivePlanId(planItem.id);
        setSelectedDistance(planItem.distance);
        const [hStr, mStr] = planItem.targetTime.split(':');
        setTargetHours(parseInt(hStr, 10) || 4);
        setTargetMinutes(parseInt(mStr, 10) || 30);
        setRaceDate(planItem.raceDate);
        if (planItem.availableDays) setAvailableDays(planItem.availableDays);

        const newPlan = generateDefaultTrainingPlan(
          planItem.distance,
          planItem.targetTime,
          planItem.raceDate,
          currentVDOT,
          planItem.availableDays || availableDays,
          planItem.targetPace || targetRacePace,
          paceZones
        );
        setTrainingPlan(newPlan);
        setShowCommunityModal(false);
        setStep(3);
        setActiveTab('workouts');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      const handleCreateNewPlan = () => {
        const targetTimeFormatted = `${newPlanHours.toString().padStart(2, '0')}:${newPlanMinutes.toString().padStart(2, '0')}`;
        const totalTargetSec = (newPlanHours * 60 + newPlanMinutes) * 60;
        const distKm = getDistanceKm(newPlanDistance, '');
        const calculatedPace = formatPace(totalTargetSec / distKm);
        const newId = `PLAN-${Date.now()}`;

        const createdPlanItem = {
          id: newId,
          title: newPlanTitle.trim() || `Mùa Giải: ${newPlanDistance} Sub ${targetTimeFormatted}`,
          distance: newPlanDistance,
          targetTime: targetTimeFormatted,
          targetPace: calculatedPace,
          raceDate: newPlanDate,
          availableDays: [...newPlanDays]
        };

        setSavedPlans(prev => [createdPlanItem, ...prev]);
        setShowNewPlanForm(false);
        setNewPlanTitle('');
        handleSelectPlan(createdPlanItem);
      };

      const handleDeletePlan = (e, planIdToDelete) => {
        e.stopPropagation();
        if (savedPlans.length <= 1) return;
        setSavedPlans(prev => prev.filter(p => p.id !== planIdToDelete));
        if (activePlanId === planIdToDelete) {
          const remaining = savedPlans.filter(p => p.id !== planIdToDelete);
          if (remaining.length > 0) handleSelectPlan(remaining[0]);
        }
      };

      const handleGeneratePlan = async () => {
        setIsGeneratingPlan(true);
        const distName = selectedDistance.includes('Khác') ? customDistance || 'Cự ly tùy chỉnh' : selectedDistance;
        const targetTimeFormatted = `${targetHours.toString().padStart(2, '0')}:${targetMinutes.toString().padStart(2, '0')}`;
        const raceDayOfWeek = raceDateDetails.dayOfWeek;

        if (geminiApiKey.trim()) {
          try {
            const prompt = `Bạn là HLV Điền kinh chuyên nghiệp RunCoach.
Thiết kế giáo án chạy bộ 12 tuần JSON:
VĐV: ${athleteName}, VDOT: ${currentVDOT}, Lịch rảnh: [${availableDays.join(', ')}] (${runsPerWeek} buổi/tuần).
Mục tiêu: ${distName} (${targetKmNumber.toFixed(1)} km) sub ${targetTimeFormatted} (Target Pace: ${targetRacePace}/km). Race Day: ${raceDate} (${raceDayOfWeek}).
Yêu cầu:
1. Chỉ xếp bài chạy vào đúng các ngày rảnh [${availableDays.join(', ')}]. Ngày khác type='Rest', distance='0 km', pace='--'.
2. Tuần 12 vào ngày ${raceDayOfWeek} bắt buộc type='RaceDay', title='🏁 RACE DAY: GIẢI CHẠY CHÍNH THỨC (${distName})', distance='${targetKmNumber.toFixed(1)} km', pace='${targetRacePace} /km'.
3. 'desc' trình bày dạng bullet '• [Tên dạng bài] - [Km] - [Pace] - [Số lần]'.
JSON format: { "targetDistance": "${distName}", "targetTime": "${targetTimeFormatted}", "raceDate": "${raceDate}", "calculatedVDOT": ${currentVDOT}, "totalWeeks": 12, "availableDays": ${JSON.stringify(availableDays)}, "targetRacePace": "${targetRacePace}", "weeks": [...] }`;

            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash:generateContent?key=${geminiApiKey.trim()}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { responseMimeType: "application/json" }
              })
            });
            if (res.ok) {
              const data = await res.json();
              const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
              if (responseText) {
                const parsedPlan = JSON.parse(responseText.replace(/```json/g, '').replace(/```/g, '').trim());
                if (parsedPlan && parsedPlan.weeks) {
                  setTrainingPlan(parsedPlan);
                  setIsGeneratingPlan(false);
                  setStep(3);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  return;
                }
              }
            }
          } catch (e) {
            console.warn('Gemini API fallback to internal VDOT engine:', e);
          }
        }

        setTimeout(() => {
          const newPlan = generateDefaultTrainingPlan(
            distName, targetTimeFormatted, raceDate, currentVDOT, availableDays, targetRacePace, paceZones
          );
          setTrainingPlan(newPlan);
          setIsGeneratingPlan(false);
          setStep(3);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 800);
      };

      const dashboardStats = useMemo(() => {
        if (!trainingPlan || !Array.isArray(trainingPlan.weeks)) {
          return { plannedKm: 0, actualKmDone: 0, complianceRate: 0, totalWorkouts: 0, completedWorkouts: 0 };
        }
        let total = 0, completed = 0, planned = 0, actual = 0;
        trainingPlan.weeks.forEach(w => {
          (Array.isArray(w.days) ? w.days : []).forEach(d => {
            if (d.type !== 'Rest') {
              total++;
              const dKm = parseFloat(d.distance) || 0;
              planned += dKm;
              if (d.completed) {
                completed++;
                actual += parseFloat(d.actualKm) || dKm;
              }
            }
          });
        });
        return {
          plannedKm: Math.round(planned),
          actualKmDone: parseFloat(actual.toFixed(1)),
          complianceRate: total > 0 ? Math.round((completed / total) * 100) : 0,
          totalWorkouts: total,
          completedWorkouts: completed
        };
      }, [trainingPlan]);

      const weeklyProgressData = useMemo(() => {
        if (!trainingPlan || !Array.isArray(trainingPlan.weeks) || trainingPlan.weeks.length === 0) return [];
        return trainingPlan.weeks.map(w => {
          const plannedKm = w.weeklyKm || 0;
          let actualKm = 0, total = 0, comp = 0;
          (Array.isArray(w.days) ? w.days : []).forEach(d => {
            if (d.type !== 'Rest') {
              total++;
              const dKm = parseFloat(d.distance) || 0;
              if (d.completed) {
                comp++;
                actualKm += parseFloat(d.actualKm) || dKm;
              }
            }
          });
          actualKm = parseFloat(actualKm.toFixed(1));
          return {
            weekNumber: w.weekNumber,
            phase: w.phase,
            plannedKm,
            actualKm,
            totalWorkouts: total,
            completedWorkouts: comp,
            completionRate: plannedKm > 0 ? Math.min(100, Math.round((actualKm / plannedKm) * 100)) : 0
          };
        });
      }, [trainingPlan]);

      const maxScale = useMemo(() => {
        if (weeklyProgressData.length === 0) return 50;
        const maxVal = Math.max(...weeklyProgressData.map(w => Math.max(w.plannedKm, w.actualKm)));
        return Math.max(40, Math.ceil(maxVal / 10) * 10);
      }, [weeklyProgressData]);

      return (
        <div className="h-[100dvh] bg-[#F4F5F7] text-slate-800 flex antialiased overflow-hidden">
          {/* LEFT OBSIDIAN SIDEBAR */}
          <aside className="hidden md:flex w-20 md:w-24 h-[100dvh] bg-[#0B0D11] border-r border-white/5 flex-col items-center py-6 shrink-0 z-30 select-none sticky top-0">
            <div onClick={() => { setActiveTab('home'); setStep(1); }} className="flex flex-col items-center gap-1.5 mb-8 cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/20 group-hover:scale-105 transition-transform">
                <span className="font-black text-2xl text-black tracking-tighter italic">R</span>
              </div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">RunCoach</span>
            </div>

            <nav className="flex-1 flex flex-col gap-3.5 items-center w-full px-2">
              {[
                { id: 'home', icon: 'Activity', label: 'Trang chủ', target: 1 },
                { id: 'plan', icon: 'Calendar', label: 'Kế hoạch', target: 2 },
                { id: 'workouts', icon: 'Layers', label: 'Giáo án', target: 3 },
                { id: 'race', icon: 'Trophy', label: 'Race Day', target: 4 },
                { id: 'stats', icon: 'BarChart2', label: 'Thống kê', target: 5 },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setStep(item.target); }}
                  className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/25 scale-105 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 font-semibold'
                  }`}
                  title={item.label}
                >
                  <SvgIcon name={item.icon} className="w-5 h-5" />
                  <span className="text-[9px] tracking-tight">{item.label}</span>
                </button>
              ))}

              <div className="w-8 h-px bg-white/10 my-1" />

              <button
                onClick={() => setShowCommunityModal(true)}
                className="w-14 h-12 rounded-2xl flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-amber-400 hover:bg-white/5 font-semibold transition-all cursor-pointer"
                title="Kho Kế Hoạch & Quản Lý Giáo Án"
              >
                <SvgIcon name="Folder" className="w-5 h-5" />
                <span className="text-[8px] tracking-tight">Kho Plan</span>
              </button>

              <button
                onClick={() => setShowSettingsModal(true)}
                className="w-14 h-12 rounded-2xl flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-amber-400 hover:bg-white/5 font-semibold transition-all cursor-pointer"
                title="Cài đặt & Gemini Key"
              >
                <SvgIcon name="Settings" className="w-5 h-5" />
                <span className="text-[8px] tracking-tight">Cài đặt</span>
              </button>
            </nav>
            <div className="text-center px-2 py-3 border-t border-white/10 w-full">
              <p className="text-[8px] font-extrabold text-slate-500 uppercase tracking-widest leading-relaxed">Better Runners<br/>Happier People</p>
            </div>
          </aside>

          {/* MAIN WRAPPER */}
          <div className="flex-1 flex flex-col min-w-0 h-[100dvh] overflow-hidden">
            {/* TOP HEADER */}
            <header className="h-16 md:h-20 bg-[#0B0D11] border-b border-white/5 px-2 sm:px-4 md:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-3 sticky top-0 z-40 shrink-0">
              <div className="navbar-steps flex-1 min-w-0 flex items-center gap-2 lg:gap-3 py-2 overflow-x-auto overflow-y-hidden">
                {[
                  { id: 1, label: 'Thể Lực & Hồ Sơ' },
                  { id: 2, label: 'Mục Tiêu & Lịch' },
                  { id: 3, label: 'Giáo Án Chi Tiết' },
                  { id: 4, label: 'Chiến Lược Race Day' },
                  { id: 5, label: 'Infographic Thể Lực' }
                ].map((s, idx) => {
                  const isActive = step === s.id;
                  const isPast = s.id < step || (trainingPlan !== null);
                  return (
                    <React.Fragment key={s.id}>
                      <button
                        type="button"
                        onClick={() => { setStep(s.id); if (s.id === 1) setActiveTab('home'); else if (s.id === 2) setActiveTab('plan'); else if (s.id === 3) setActiveTab('workouts'); else if (s.id === 4) setActiveTab('race'); else setActiveTab('stats'); }}
                        className={`shrink-0 flex items-center gap-2 px-3 py-2.5 rounded-full text-xs transition-all whitespace-nowrap cursor-pointer ${
                          isActive
                            ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/25 font-black scale-102'
                            : isPast ? 'bg-white/10 text-slate-200 hover:bg-white/15 hover:text-white font-bold' : 'bg-white/5 text-slate-600 font-medium'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${isActive ? 'bg-black text-amber-400' : 'bg-white/20 text-slate-300'}`}>
                          {s.id}
                        </span>
                        <span className="hidden sm:inline tracking-tight">{s.label}</span>
                      </button>
                      {idx < 4 && <div className="w-3 lg:w-5 h-px bg-white/15 shrink-0 hidden md:block" />}
                    </React.Fragment>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 lg:gap-3 shrink-0">
                <button
                  onClick={handleSyncAllPlans}
                  className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-300 transition-all cursor-pointer"
                  title="Đồng bộ lại toàn bộ giáo án"
                >
                  <SvgIcon name="RefreshCw" className="w-3.5 h-3.5 text-amber-400" />
                  <span>Đồng Bộ Dữ Liệu</span>
                </button>

                <button
                  onClick={() => setShowAiModal(true)}
                  className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 transition-all cursor-pointer group"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-extrabold">AI ENGINE</span>
                  <span className="text-amber-400 font-mono font-bold text-xs">{aiEngineStatus.modelName}</span>
                </button>

                <button
                  onClick={() => setShowAthleteModal(true)}
                  className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition-all text-left cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 text-black font-black flex items-center justify-center text-xs shadow-sm">
                    {athleteName.charAt(0)}
                  </div>
                  <div className="hidden lg:block">
                    <p className="text-xs font-extrabold text-white leading-tight">{athleteName}</p>
                    <p className="text-[10px] text-amber-400/90 font-mono tracking-tight font-bold">{athleteId}</p>
                  </div>
                </button>
              </div>
            </header>

            <div className="flex-1 min-h-0 overflow-y-auto p-2 pb-20 sm:p-6 sm:pb-6 lg:p-8 lg:pb-8 flex gap-6 lg:gap-8 items-start">
              {/* SIDE POSTER */}
              <div className="hidden xl:flex sticky top-0 self-start w-72 max-h-[720px] h-[calc(100dvh-144px)] rounded-3xl overflow-hidden shadow-2xl shrink-0 flex-col justify-between p-5 2xl:p-6 bg-[#080A0E] border border-amber-500/20 text-white group">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out pointer-events-none"
                  style={{
                    backgroundImage: `url("${activeRaceDetails.imageUrl}")`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-[#080A0E]/70 to-[#080A0E]/30 pointer-events-none" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-44 h-44 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 backdrop-blur-md mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
                    <span className="text-[10px] font-black tracking-widest text-amber-300 uppercase whitespace-nowrap">{activeRaceDetails.badge}</span>
                  </div>
                  <h2 className="text-[clamp(1.65rem,2vw,2rem)] font-black italic tracking-tighter leading-none mt-1 text-white uppercase drop-shadow-xl">
                    <span className="block whitespace-nowrap">RUN <span className="text-amber-400">SMARTER</span></span>
                    <span className="block whitespace-nowrap mt-1 text-white/95">GO FURTHER</span>
                  </h2>
                  <p className="text-xs text-slate-200 mt-3 font-medium leading-relaxed drop-shadow-sm">
                    {activeRaceDetails.name} • <span className="text-amber-300 font-bold">{activeRaceDetails.location}</span>
                  </p>
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 space-y-2.5 shadow-xl">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-300 whitespace-nowrap">Target Race:</span>
                      <span className="text-amber-400 font-mono font-black whitespace-nowrap">{selectedDistance.split(' ')[0]}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-300 whitespace-nowrap">Target Pace:</span>
                      <span className="text-white font-mono font-black">{targetRacePace} /km</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-300 whitespace-nowrap">Lịch rảnh:</span>
                      <span className="text-emerald-400 font-mono font-black whitespace-nowrap">{runsPerWeek} buổi / tuần</span>
                    </div>
                  </div>
                  <div className="w-full bg-white/15 h-1.5 rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-300 h-full transition-all duration-300 shadow-sm" style={{ width: `${(runsPerWeek / 7) * 100}%` }} />
                  </div>
                  <p className="text-[9px] text-amber-300/95 font-extrabold tracking-widest uppercase flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>Race Day: {raceDateDetails.dayOfWeek}, {raceDate}</span>
                  </p>
                </div>
              </div>

              {/* MAIN CONTENT AREA */}
              <main className="flex-1 bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-slate-200/80 p-3 sm:p-8 lg:p-10 min-w-0">
                {/* STEP 1: PHYSICAL PROFILE */}
                {step === 1 && (
                  <div className="space-y-8">
                    {/* ATHLETIC HERO BANNER WITH MARATHON PACK IMAGERY */}
                    <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0c1017] via-[#111622] to-[#080a0e] text-white shadow-xl border border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-5 group">
                      <div
                        className="absolute right-0 top-0 bottom-0 w-full sm:w-3/5 bg-cover bg-center opacity-45 scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out pointer-events-none"
                        style={{
                          backgroundImage: 'url("https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1600&q=90")'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1017] via-[#0c1017]/95 sm:via-[#0c1017]/85 to-transparent pointer-events-none" />
                      <div className="absolute -top-12 -left-12 w-52 h-52 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

                      <div className="relative z-10 max-w-xl">
                        <div className="flex items-center gap-2 mb-2.5">
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-black uppercase tracking-wider shadow-sm whitespace-nowrap">
                            Hồ Sơ VĐV &amp; Giải Đua
                          </span>
                          <span className="text-xs text-amber-300/90 font-mono font-bold whitespace-nowrap">• VDOT Biometrics</span>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase leading-snug drop-shadow-md">
                          <span className="inline-block whitespace-nowrap">HỒ SƠ VĐV</span>
                          <span className="text-amber-400 mx-2">&amp;</span>
                          <span className="inline-block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200">
                            THỂ LỰC HIỆN TẠI
                          </span>
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-300 mt-2.5 font-medium flex items-center gap-2 flex-wrap leading-relaxed">
                          <span className="whitespace-nowrap">Đang cá nhân hóa cho:</span>
                          <span className="font-extrabold text-amber-300 bg-white/10 px-2.5 py-0.5 rounded-lg border border-white/10 backdrop-blur-md shadow-xs whitespace-nowrap">
                            {athleteName}
                          </span>
                          <span className="text-xs font-mono font-bold text-amber-400 whitespace-nowrap">({athleteId})</span>
                        </p>
                      </div>

                      <button
                        onClick={() => setShowAthleteModal(true)}
                        className="relative z-10 self-start sm:self-auto flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:brightness-110 shadow-lg shadow-amber-400/25 transition-all cursor-pointer uppercase tracking-wider shrink-0 whitespace-nowrap active:scale-95"
                      >
                        <SvgIcon name="Edit3" className="w-3.5 h-3.5 shrink-0" />
                        <span>Đổi VĐV</span>
                      </button>
                    </div>

                    {/* MODULE 01 */}
                    <section className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-slate-900 text-amber-400 font-mono font-black text-xs flex items-center justify-center">01</span>
                        <h3 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">Chỉ Số Thể Chất Bản Thân</h3>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                          <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1">Giới tính</label>
                          <select value={gender} onChange={e => setGender(e.target.value)} className="w-full bg-transparent font-bold text-slate-800 text-sm focus:outline-none cursor-pointer">
                            <option value="Nam (Male)">Nam (Male)</option>
                            <option value="Nữ (Female)">Nữ (Female)</option>
                          </select>
                        </div>
                        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                          <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1">Tuổi</label>
                          <div className="flex items-center justify-between">
                            <input type="number" value={age} onChange={e => setAge(Number(e.target.value))} className="w-16 bg-transparent font-black font-mono text-slate-800 text-base focus:outline-none" />
                            <span className="text-xs text-slate-400 font-semibold">tuổi</span>
                          </div>
                        </div>
                        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                          <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1">Chiều cao</label>
                          <div className="flex items-center justify-between">
                            <input type="number" value={height} onChange={e => setHeight(Number(e.target.value))} className="w-16 bg-transparent font-black font-mono text-slate-800 text-base focus:outline-none" />
                            <span className="text-xs text-slate-400 font-semibold">cm</span>
                          </div>
                        </div>
                        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                          <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1">Cân nặng</label>
                          <div className="flex items-center justify-between">
                            <input type="number" value={weight} onChange={e => setWeight(Number(e.target.value))} className="w-16 bg-transparent font-black font-mono text-slate-800 text-base focus:outline-none" />
                            <span className="text-xs text-slate-400 font-semibold">kg</span>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* MODULE 02 */}
                    <section className="bg-gradient-to-br from-slate-50 via-white to-amber-50/20 border-2 border-amber-300/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-amber-400 text-black font-mono font-black text-xs flex items-center justify-center">02</span>
                          <div>
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Thành Tích 5KM &amp; Trạm Đo Lường VDOT</h3>
                            <p className="text-xs text-slate-500 font-medium">Căn cứ vàng để phân tích vận tốc và dải nhịp tim</p>
                          </div>
                        </div>
                        <span className="text-xs font-black text-amber-800 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full uppercase tracking-wider">BỘ NÃO GIÁO ÁN</span>
                      </div>

                      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                        <div className="xl:col-span-7 space-y-6">
                          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4 sm:gap-6">
                            <div className="flex items-center gap-3 shrink-0">
                              <div className="w-12 h-12 rounded-xl bg-amber-400 text-black flex items-center justify-center shadow-md shadow-amber-400/20">
                                <SvgIcon name="Flame" className="w-6 h-6" />
                              </div>
                              <div>
                                <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block">Mốc 5K Benchmark</span>
                                <span className="text-xs font-semibold text-slate-600">Thành tích tốt nhất gần đây</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 ml-auto shrink-0">
                              <div className="flex flex-col items-center">
                                <span className="text-[10px] font-black text-slate-400 uppercase mb-1">Giờ</span>
                                <div className="flex items-center gap-1 bg-slate-100 px-3 py-2 rounded-xl border border-slate-200">
                                  <button onClick={() => setFiveKHours(prev => Math.max(0, prev - 1))} className="w-6 h-6 rounded-lg bg-white text-slate-700 font-black flex items-center justify-center hover:bg-slate-200 cursor-pointer">-</button>
                                  <span className="text-xl font-black font-mono text-slate-900 w-8 text-center">{fiveKHours.toString().padStart(2, '0')}</span>
                                  <button onClick={() => setFiveKHours(prev => Math.min(2, prev + 1))} className="w-6 h-6 rounded-lg bg-white text-slate-700 font-black flex items-center justify-center hover:bg-slate-200 cursor-pointer">+</button>
                                </div>
                              </div>
                              <span className="text-2xl font-black text-slate-400 mt-4">:</span>
                              <div className="flex flex-col items-center">
                                <span className="text-[10px] font-black text-slate-400 uppercase mb-1">Phút</span>
                                <div className="flex items-center gap-1 bg-slate-100 px-3 py-2 rounded-xl border border-slate-200">
                                  <button onClick={() => setFiveKMinutes(prev => Math.max(12, prev - 1))} className="w-6 h-6 rounded-lg bg-white text-slate-700 font-black flex items-center justify-center hover:bg-slate-200 cursor-pointer">-</button>
                                  <span className="text-xl font-black font-mono text-amber-600 w-8 text-center">{fiveKMinutes.toString().padStart(2, '0')}</span>
                                  <button onClick={() => setFiveKMinutes(prev => Math.min(59, prev + 1))} className="w-6 h-6 rounded-lg bg-white text-slate-700 font-black flex items-center justify-center hover:bg-slate-200 cursor-pointer">+</button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Pace 5K Chuẩn</span>
                              <p className="text-lg font-black font-mono text-slate-800 mt-0.5">{calculated5KPace} <span className="text-xs font-bold text-slate-500">/km</span></p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Vận Tốc Trung Bình</span>
                              <p className="text-lg font-black font-mono text-slate-800 mt-0.5">{calculatedSpeedKmh} <span className="text-xs font-bold text-slate-500">km/h</span></p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                              <span>Kéo thanh trượt điều chỉnh:</span>
                              <span className="font-mono text-amber-600 font-black">{total5KMinutes} phút</span>
                            </div>
                            <input
                              type="range"
                              min="14"
                              max="60"
                              value={total5KMinutes}
                              onChange={e => {
                                const val = Number(e.target.value);
                                setFiveKHours(Math.floor(val / 60));
                                setFiveKMinutes(val % 60);
                              }}
                              className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-200 rounded-lg"
                            />
                          </div>
                        </div>

                        <div className="xl:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                            <div>
                              <span className="text-xs font-black text-slate-900 uppercase tracking-wide block">Chỉ Số Sức Mạnh VDOT</span>
                              <span className="text-[11px] text-slate-400 font-medium">Jack Daniels Oxygen Power</span>
                            </div>
                            <div className="px-4 py-2 rounded-2xl bg-slate-900 text-white font-mono font-black text-2xl tracking-tight shadow-md">
                              {currentVDOT} <span className="text-[10px] font-black text-amber-400 tracking-wider">PTS</span>
                            </div>
                          </div>

                          <div className="space-y-3 pt-1">
                            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 sm:p-3.5 flex flex-wrap items-center justify-between gap-x-2 gap-y-2">
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5 whitespace-nowrap">
                                  <SvgIcon name="Heart" className="w-3.5 h-3.5 text-emerald-600" />
                                  <span className="text-xs font-black text-emerald-950 uppercase">Easy Pace (E)</span>
                                </div>
                                <span className="text-[10px] text-emerald-700 font-semibold">Zone 2 • Đốt mỡ &amp; hiếu khí</span>
                              </div>
                              <span className="ml-auto max-w-full text-xs sm:text-sm font-black font-mono text-emerald-900 bg-white px-2.5 sm:px-3 py-1.5 rounded-lg border border-emerald-200 shadow-xs whitespace-nowrap shrink-0">
                                {paceZones.easy} /km
                              </span>
                            </div>

                            <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 sm:p-3.5 flex flex-wrap items-center justify-between gap-x-2 gap-y-2">
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5 whitespace-nowrap">
                                  <SvgIcon name="Flame" className="w-3.5 h-3.5 text-amber-600" />
                                  <span className="text-xs font-black text-amber-950 uppercase">Threshold Pace (T)</span>
                                </div>
                                <span className="text-[10px] text-amber-700 font-semibold">Zone 4 • Ngưỡng đào thải Lactate</span>
                              </div>
                              <span className="ml-auto max-w-full text-xs sm:text-sm font-black font-mono text-amber-900 bg-white px-2.5 sm:px-3 py-1.5 rounded-lg border border-amber-200 shadow-xs whitespace-nowrap shrink-0">
                                {paceZones.threshold} /km
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* MODULE 03 */}
                    <section className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-slate-900 text-amber-400 font-mono font-black text-xs flex items-center justify-center">03</span>
                          <div>
                            <h3 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">Lịch Rảnh &amp; Khối Lượng Chạy Bộ</h3>
                            <p className="text-[11px] text-slate-500 font-medium">Hệ thống sẽ chỉ xếp bài chạy vào những ngày bạn chọn</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full self-start sm:self-auto">
                          <SvgIcon name="ShieldCheck" className="w-3.5 h-3.5 text-amber-800" />
                          <span className="text-[11px] font-black text-amber-900 uppercase">{runsPerWeek} BUỔI / TUẦN</span>
                        </div>
                      </div>

                      <div className="space-y-3 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <span className="text-xs font-black text-slate-900 uppercase tracking-wide block">Chọn các ngày bạn có thể chạy:</span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-black text-slate-400 uppercase">Mẫu:</span>
                            {[2, 3, 4, 5, 6].map(p => (
                              <button
                                key={p}
                                type="button"
                                onClick={() => handleSelectDaysPreset(p)}
                                className={`px-2 py-0.5 rounded-md text-[10px] font-black transition-colors cursor-pointer ${
                                  dayPresetLimit === p ? 'bg-amber-400 text-black' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                              >
                                {p} Buổi
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-7 gap-2 sm:gap-3 pt-1">
                          {ALL_WEEK_DAYS.map(dayName => {
                            const isSelected = availableDays.includes(dayName);
                            const isLimitReached = !isSelected && availableDays.length >= dayPresetLimit;
                            const shortName = dayName.replace('Thứ ', 'T').replace('Chủ Nhật', 'CN');
                            return (
                              <button
                                key={dayName}
                                type="button"
                                onClick={() => handleToggleDay(dayName)}
                                disabled={isLimitReached}
                                className={`py-3 px-1 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                                  isSelected
                                    ? 'bg-amber-400 border-amber-400 text-black shadow-md shadow-amber-400/25 ring-2 ring-amber-300 scale-102 font-black'
                                    : isLimitReached
                                      ? 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed opacity-60'
                                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 font-bold'
                                }`}
                              >
                                <span className="text-sm sm:text-base font-black font-mono">{shortName}</span>
                                <span className="text-[9px] uppercase tracking-tighter hidden sm:inline opacity-80">{dayName}</span>
                                <span className={`w-2 h-2 rounded-full mt-0.5 ${isSelected ? 'bg-black' : 'bg-slate-300'}`} />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </section>

                    <button
                      type="button"
                      onClick={() => { setStep(2); setActiveTab('plan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-400/25 transition-all uppercase tracking-wide cursor-pointer"
                    >
                      <span>Tiếp Theo: Thiết Lập Mục Tiêu &amp; Lịch Thi Đấu</span>
                      <SvgIcon name="ChevronRight" className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {/* STEP 2: GOALS & RACE SCHEDULE */}
                {step === 2 && (
                  <div className="flex flex-col space-y-8">
                    <div className="border-b border-slate-100 pb-6">
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase leading-none">
                        MỤC TIÊU THI ĐẤU &amp; <span className="text-amber-500">LỊCH HUẤN LUYỆN</span>
                      </h1>
                      <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">Xác định cự ly mục tiêu, thời gian kỳ vọng và ngày giải đấu thực tế.</p>
                    </div>

                    <div className="order-2 space-y-4">
                      <label className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide block">2. Cự Ly Mục Tiêu (Target Distance)</label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                        {['5K (5.0 km)', '10K (10.0 km)', 'Half Marathon (21.1 km)', 'Full Marathon (42.2 km)', 'Khác (Other)...'].map(d => (
                          <button
                            key={d}
                            type="button"
                            onClick={() => setSelectedDistance(d)}
                            className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-black transition-all text-left flex flex-col justify-between h-20 cursor-pointer ${
                              selectedDistance === d
                                ? 'bg-amber-400 border-amber-400 text-black shadow-md shadow-amber-400/20'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 font-bold'
                            }`}
                          >
                            <SvgIcon name="Compass" className="w-4 h-4 mb-1" />
                            <span>{d}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="order-3 space-y-4">
                      <label className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide block">3. Thời Gian Mục Tiêu Về Đích (Target Time)</label>
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4 sm:gap-6">
                        <div className="shrink-0">
                          <span className="text-xs font-black text-slate-500 uppercase tracking-wide block">Kỳ vọng thành tích</span>
                          <p className="text-xs text-slate-400 mt-1 font-medium">
                            Target Race Pace: <span className="font-bold text-amber-600 font-mono text-base">{targetRacePace} /km</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-4 ml-auto shrink-0">
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black text-slate-400 uppercase mb-1">Giờ</span>
                          <div className="flex items-center gap-1 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm">
                              <button onClick={() => setTargetHours(prev => Math.max(0, prev - 1))} className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-black flex items-center justify-center hover:bg-slate-200 cursor-pointer">-</button>
                              <span className="text-2xl font-black font-mono text-slate-900 w-10 text-center">{targetHours.toString().padStart(2, '0')}</span>
                              <button onClick={() => setTargetHours(prev => Math.min(10, prev + 1))} className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-black flex items-center justify-center hover:bg-slate-200 cursor-pointer">+</button>
                            </div>
                          </div>
                          <span className="text-3xl font-black text-slate-300 mt-4">:</span>
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black text-slate-400 uppercase mb-1">Phút</span>
                            <div className="flex items-center gap-1 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm">
                              <button onClick={() => setTargetMinutes(prev => Math.max(0, prev - 5))} className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-black flex items-center justify-center hover:bg-slate-200 cursor-pointer">-</button>
                              <span className="text-2xl font-black font-mono text-amber-600 w-10 text-center">{targetMinutes.toString().padStart(2, '0')}</span>
                              <button onClick={() => setTargetMinutes(prev => Math.min(55, prev + 5))} className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-black flex items-center justify-center hover:bg-slate-200 cursor-pointer">+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="order-1 space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide block">1. Ngày Thi Đấu Thực Tế (Race Day)</label>
                        <span className="text-[11px] font-semibold text-slate-400">Tự động gán vào ngày đua chính thức ở Tuần {raceDateDetails.totalWeeks}</span>
                      </div>

                      {/* QUICK RACE PRESETS WITH HIGH IMPACT VISUAL CARDS */}
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider">⚡ Chọn Nhanh Các Giải Chạy Danh Tiếng &amp; Cung Đường Đẹp:</span>
                          <button
                            type="button"
                            onClick={() => setShowCustomRaceModal(true)}
                            className="text-[10px] font-black text-white bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                          >
                            + Thêm Giải Chạy
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {allRaceOptions.map(r => {
                            const isChosen = raceDate === r.date;
                            return (
                              <div
                                key={r.id}
                                onClick={() => {
                                  setRaceDate(r.date);
                                  setSelectedDistance(r.defaultDistance);
                                }}
                                onKeyDown={event => {
                                  if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault();
                                    setRaceDate(r.date);
                                    setSelectedDistance(r.defaultDistance);
                                  }
                                }}
                                role="button"
                                tabIndex={0}
                                className={`relative overflow-hidden rounded-2xl p-4 text-left transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[110px] group ${
                                  isChosen
                                    ? 'ring-2 ring-amber-400 shadow-lg shadow-amber-400/20 scale-[1.02]'
                                    : 'border border-slate-200 hover:border-amber-300 hover:shadow-md'
                                }`}
                              >
                                <div
                                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                  style={{ backgroundImage: `url("${r.imageUrl}")` }}
                                />
                                <div className={`absolute inset-0 transition-colors ${
                                  isChosen ? 'bg-gradient-to-t from-black/90 via-black/60 to-black/35' : 'bg-gradient-to-t from-black/85 via-black/55 to-black/30 group-hover:from-black/80'
                                }`} />

                                <div className="relative z-10 flex items-center justify-between gap-2">
                                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm ${
                                    isChosen ? 'bg-amber-400 text-black' : 'bg-white/20 text-white backdrop-blur-md border border-white/20'
                                  }`}>
                                    {r.badge}
                                  </span>
                                  <span className="text-[10px] font-mono font-bold text-slate-200 drop-shadow">{r.location}</span>
                                </div>

                                <div className="relative z-10 mt-3">
                                  <h5 className="text-xs sm:text-sm font-black text-white leading-snug drop-shadow-md">
                                    <AutoScrollText text={r.name} className="w-full max-w-full" />
                                  </h5>
                                  <div className="flex items-center justify-between text-[11px] font-bold pt-1.5 mt-1 border-t border-white/20 text-slate-200">
                                    <span className="text-amber-300 font-mono font-extrabold">{r.date}</span>
                                  </div>
                                </div>
                                {getRaceDistanceOptions(r).length > 0 && (
                                  <div className="relative z-10 grid grid-cols-4 gap-1.5 mt-2">
                                    {getRaceDistanceOptions(r).map(distance => {
                                      const isDistanceChosen = selectedDistance === distance.value;
                                      return (
                                        <button
                                          key={distance.value}
                                          type="button"
                                          onClick={event => {
                                            event.stopPropagation();
                                            setRaceDate(r.date);
                                            setSelectedDistance(distance.value);
                                          }}
                                          className={`min-w-0 px-1 py-1.5 rounded-md text-[9px] sm:text-[10px] font-black font-mono text-center transition-colors cursor-pointer ${
                                            isDistanceChosen && isChosen
                                              ? 'bg-amber-400 text-black'
                                              : 'bg-black/45 text-white border border-white/25 hover:bg-white/20'
                                          }`}
                                        >
                                          {distance.label}
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-6 shadow-xs">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-amber-400 text-black flex items-center justify-center shrink-0 shadow-md shadow-amber-400/20">
                            <SvgIcon name="Trophy" className="w-7 h-7" />
                          </div>
                          <div className="space-y-1">
                            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block">Thời Gian Khởi Tranh Giải Chạy</span>
                            <h4 className="text-base sm:text-lg font-black text-slate-900 capitalize tracking-tight">{raceDateDetails.formattedDate}</h4>
                            <span className="text-xs font-mono font-bold text-amber-600 block">Tranh tài vào: {raceDateDetails.dayOfWeek} (Tuần {raceDateDetails.totalWeeks})</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white border border-slate-200/90 rounded-2xl px-5 py-3.5 shadow-xs">
                          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                            <SvgIcon name="Clock" className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Thời gian còn lại</span>
                            <div className="flex items-baseline gap-2 mt-0.5">
                              <p className="text-lg sm:text-xl font-black font-mono text-slate-900">Còn <span className="text-amber-600">{raceDateDetails.totalWeeks}</span> tuần</p>
                              <span className="text-xs font-bold font-mono text-slate-500">({raceDateDetails.totalDays} ngày)</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center gap-3 shrink-0">
                          <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider whitespace-nowrap">Race Day:</label>
                          <input
                            type="date"
                            value={raceDate}
                            onChange={e => setRaceDate(e.target.value)}
                            className="bg-white border-2 border-slate-200 hover:border-amber-400 focus:border-amber-400 px-4 py-2.5 rounded-2xl font-black font-mono text-slate-900 text-sm focus:outline-none transition-all shadow-xs cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="order-last flex flex-col sm:flex-row gap-4 pt-4">
                      <button type="button" onClick={() => { setStep(1); setActiveTab('home'); }} className="py-4 px-6 rounded-2xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 transition-colors uppercase tracking-wide cursor-pointer">
                        Quay Lại
                      </button>
                      <button
                        type="button"
                        onClick={handleGeneratePlan}
                        disabled={isGeneratingPlan}
                        className="flex-1 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-black text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-400/25 transition-all uppercase tracking-wide cursor-pointer disabled:opacity-50"
                      >
                        {isGeneratingPlan ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            <span>Gemini 3 Flash Đang Lên Lịch &amp; Đồng Bộ Race Day...</span>
                          </>
                        ) : (
                          <>
                            <SvgIcon name="Sparkles" className="w-5 h-5" />
                            <span>Khởi Tạo Giáo Án Chuẩn VDOT &amp; Đồng Bộ Race Day</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: 12-WEEK TRAINING PLAN */}
                {step === 3 && trainingPlan && Array.isArray(trainingPlan.weeks) && trainingPlan.weeks.length > 0 && (
                  <div className="space-y-8">
                    {/* RACE DAY BANNER WITH MARATHON FINISH PHOTO BACKGROUND */}
                    <div className="relative overflow-hidden rounded-3xl p-6 sm:p-7 text-white shadow-xl border-2 border-amber-400 group">
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-35 scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out pointer-events-none"
                        style={{ backgroundImage: `url("${activeRaceDetails.imageUrl}")` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60 pointer-events-none" />

                      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-amber-400 text-black flex items-center justify-center shrink-0 shadow-lg shadow-amber-400/25">
                            <SvgIcon name="Trophy" className="w-7 h-7 stroke-[2.5]" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
                              <span className="px-2.5 py-0.5 rounded-md bg-amber-400 text-black font-extrabold">{activeRaceDetails.badge}</span>
                              <span className="text-slate-400">•</span>
                              <span className="text-amber-300 font-mono">{raceDateDetails.formattedDate}</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mt-1 text-white">
                              {activeRaceDetails.name} • Sub {trainingPlan.targetTime}
                            </h3>
                            <p className="text-xs font-semibold text-slate-300 mt-0.5">
                              Target Race Pace: <span className="font-mono font-black text-amber-400">{targetRacePace} /km</span> • Tuần {trainingPlan.totalWeeks || trainingPlan.weeks.length} là ngày tranh tài chính thức!
                            </p>
                          </div>
                        </div>

                        <button onClick={() => { setStep(4); setActiveTab('race'); }} className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 hover:brightness-110 text-black text-xs font-black flex items-center gap-2 uppercase tracking-wider cursor-pointer shadow-lg self-end md:self-auto transition-transform active:scale-95">
                          <span>Chiến Lược Race Day</span>
                          <SvgIcon name="ChevronRight" className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* WEEK LIST */}
                      <div className="lg:col-span-4 space-y-2 min-w-0 self-start lg:sticky lg:top-0 lg:z-10">
                        <div className="flex items-center justify-between mb-3 px-1">
                          <div>
                            <span className="text-xs font-black text-slate-800 uppercase tracking-wider block">Chọn tuần huấn luyện</span>
                            <span className="text-[10px] text-slate-400 font-medium">Toàn bộ chu kỳ {trainingPlan.totalWeeks || trainingPlan.weeks.length} tuần</span>
                          </div>
                          <button onClick={handleSyncAllPlans} className="text-[10px] font-black text-amber-600 hover:text-amber-700 flex items-center gap-1 bg-amber-50 hover:bg-amber-100/80 px-2.5 py-1 rounded-lg border border-amber-200 transition-colors cursor-pointer">
                            <SvgIcon name="RefreshCw" className="w-3 h-3" />
                            Tái đồng bộ
                          </button>
                        </div>

                        <div
                          ref={weekListRef}
                          className="week-list-scroll space-y-2 max-h-[min(520px,calc(100dvh-280px))] overflow-y-auto overscroll-contain pr-1.5"
                        >
                          {trainingPlan.weeks.map((w, idx) => {
                            const isSelected = selectedWeekIndex === idx;
                            const isRaceWeek = idx === trainingPlan.weeks.length - 1;
                            const workoutDays = (Array.isArray(w.days) ? w.days : []).filter(d => d.type !== 'Rest');
                            const totalWorkouts = workoutDays.length;
                            const completedWorkouts = workoutDays.filter(d => d.completed).length;
                            const isAllDone = totalWorkouts > 0 && completedWorkouts === totalWorkouts;

                            return (
                              <button
                                key={w.weekNumber}
                                data-week-index={idx}
                                onClick={() => setSelectedWeekIndex(idx)}
                                className={`w-full p-3.5 rounded-2xl border text-left transition-all flex flex-wrap items-center justify-between gap-3 cursor-pointer ${
                                  isRaceWeek
                                    ? isSelected
                                      ? 'bg-amber-400 border-amber-500 text-black shadow-lg shadow-amber-400/25 ring-2 ring-amber-400 scale-[1.01]'
                                      : 'bg-amber-50/80 border-amber-300 text-slate-900 hover:bg-amber-100/70'
                                    : isSelected
                                      ? 'bg-slate-900 border-slate-900 text-white shadow-md scale-[1.01]'
                                      : 'bg-slate-50/90 border-slate-200 text-slate-700 hover:bg-slate-100/80'
                                }`}
                              >
                                <div className="flex-[1_1_220px] min-w-0 pr-1">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="font-mono font-black text-xs shrink-0">{isRaceWeek ? `🏁 Tuần ${w.weekNumber} (RACE WEEK)` : `Tuần ${w.weekNumber}`}</span>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-md font-black font-mono shrink-0 ${
                                      isRaceWeek ? 'bg-black text-amber-400' : isSelected ? 'bg-amber-400 text-black' : 'bg-slate-200 text-slate-600'
                                    }`}>
                                      {w.weeklyKm} km
                                    </span>
                                  </div>
                                  <p className={`text-[11px] font-semibold mt-1 truncate ${isSelected ? (isRaceWeek ? 'text-slate-900' : 'text-slate-300') : 'text-slate-500'}`} title={w.phase}>
                                    {w.phase}
                                  </p>
                                </div>
                                <span className={`text-[10px] font-mono font-black px-2.5 py-1.5 rounded-xl shrink-0 whitespace-nowrap text-center ${
                                  isAllDone
                                    ? 'bg-emerald-600 text-white'
                                    : isSelected
                                      ? isRaceWeek ? 'bg-black text-amber-400' : 'bg-white/10 text-white'
                                      : 'bg-slate-200/90 text-slate-700'
                                }`}>
                                  {isAllDone && '✓ '}{completedWorkouts}/{totalWorkouts} buổi
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* WORKOUT DAYS DETAIL */}
                      <div className="lg:col-span-8 space-y-4">
                        <div className="border-b border-slate-100 pb-3">
                          <h3 className="text-lg font-black text-slate-900 uppercase">
                            Chi Tiết Tuần {trainingPlan.weeks[selectedWeekIndex]?.weekNumber}: {trainingPlan.weeks[selectedWeekIndex]?.phase}
                          </h3>
                          <p className="text-xs text-slate-500 font-medium">Trọng tâm: {trainingPlan.weeks[selectedWeekIndex]?.focus} • Khối lượng: {trainingPlan.weeks[selectedWeekIndex]?.weeklyKm} km</p>
                        </div>

                        <div className="space-y-3">
                          {(Array.isArray(trainingPlan.weeks[selectedWeekIndex]?.days) ? trainingPlan.weeks[selectedWeekIndex].days : []).map((day, dIdx) => {
                            const isSpecialRaceDay = day.type === 'RaceDay';
                            const isRaceWeek = selectedWeekIndex === trainingPlan.weeks.length - 1;
                            let workoutDate = day.date;
                            if (!workoutDate) {
                              const fallbackDate = addDays(
                                startOfCurrentWeekMonday(),
                                selectedWeekIndex * 7 + getVietnameseWeekdayIndex(day.day)
                              );
                              workoutDate = isRaceWeek && day.day === getDayOfWeekFromDate(raceDate)
                                ? raceDate
                                : formatDateAsISO(fallbackDate);
                            }
                            const todayDate = formatDateAsISO(new Date());
                            const canCompleteWorkout = workoutDate <= todayDate;
                            return (
                              <div
                                key={day.day}
                                className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4 ${
                                  isSpecialRaceDay
                                    ? 'bg-gradient-to-br from-amber-50 via-white to-amber-100/50 border-2 border-amber-400 shadow-md ring-2 ring-amber-300/40'
                                    : day.completed
                                      ? 'bg-emerald-50/70 border-emerald-300 shadow-xs'
                                      : day.type === 'Rest'
                                        ? 'bg-slate-50/80 border-slate-200/60 opacity-80'
                                        : 'bg-white border-slate-200 hover:border-slate-300'
                                }`}
                              >
                                <div className="flex items-start gap-3.5 flex-1 min-w-0">
                                  {day.type !== 'Rest' ? (
                                    <button
                                      type="button"
                                      onClick={() => handleToggleWorkoutComplete(selectedWeekIndex, dIdx, workoutDate)}
                                      disabled={!canCompleteWorkout}
                                      title={canCompleteWorkout ? 'Đánh dấu buổi tập hoàn thành' : `Chưa thể đánh dấu trước ngày ${formatDateForBadge(workoutDate)}/${workoutDate.split('-')[0]}`}
                                      className={`w-7 h-7 mt-0.5 rounded-full flex items-center justify-center transition-all shrink-0 ${
                                        canCompleteWorkout ? 'cursor-pointer' : 'cursor-not-allowed'
                                      } ${
                                        day.completed
                                          ? 'bg-emerald-600 text-white ring-4 ring-emerald-100'
                                          : !canCompleteWorkout
                                            ? 'border-2 border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed opacity-60'
                                          : isSpecialRaceDay
                                            ? 'border-2 border-amber-500 bg-amber-400 text-black hover:scale-105'
                                            : 'border-2 border-slate-300 hover:border-emerald-500 bg-white text-transparent'
                                      }`}
                                    >
                                      {isSpecialRaceDay && !day.completed ? (
                                        <SvgIcon name="Trophy" className="w-3.5 h-3.5" />
                                      ) : (
                                        <SvgIcon name="Check" className={`w-4 h-4 ${day.completed ? 'block' : 'opacity-0'}`} />
                                      )}
                                    </button>
                                  ) : (
                                    <div className="w-7 h-7 mt-0.5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 text-[10px] font-black">Zz</div>
                                  )}

                                  <div className="space-y-1.5 flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <span className={`px-2.5 py-1 rounded-lg font-mono font-black text-xs ${
                                        isSpecialRaceDay ? 'bg-black text-amber-400' : availableDays.includes(day.day) ? 'bg-slate-900 text-amber-400' : 'bg-slate-200 text-slate-600'
                                      }`}>
                                        {day.day} • {formatDateForBadge(workoutDate)}
                                      </span>
                                      <span className={`text-xs font-black uppercase ${isSpecialRaceDay ? 'text-amber-950 font-black' : day.completed ? 'text-emerald-950' : 'text-slate-800'}`}>
                                        {day.title}
                                      </span>
                                      {isSpecialRaceDay && <span className="px-2 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-black uppercase tracking-wider">CHÍNH THỨC 🏆</span>}
                                      {day.completed && <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider">Đã Hoàn Thành ✓</span>}
                                    </div>
                                    <p className={`text-xs font-mono font-black ${day.type === 'Rest' ? 'text-slate-400' : isSpecialRaceDay ? 'text-amber-800' : day.completed ? 'text-emerald-800' : 'text-amber-600'}`}>
                                      {day.distance} • Pace: {day.pace}
                                    </p>
                                    <div className="space-y-1 pt-1">
                                      {day.desc.split('\n').filter(Boolean).map((line, lIdx) => (
                                        <div key={lIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-600">
                                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isSpecialRaceDay ? 'bg-amber-600' : day.type === 'Rest' ? 'bg-slate-300' : 'bg-amber-500'}`} />
                                          <span className="leading-relaxed">{line.replace(/^[•\-\*]\s*/, '')}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: RACE TACTICS */}
                {step === 4 && (
                  <div className="space-y-8">
                    <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                          CHIẾN LƯỢC TỐC ĐỘ &amp; <span className="text-amber-500">DINH DƯỠNG RACE DAY</span>
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                          Đã đồng bộ tự động theo: <strong className="text-slate-800">{selectedDistance}</strong> ({targetKmNumber.toFixed(1)} km) • Mục tiêu: <strong className="text-amber-600">Sub {targetHours}h {targetMinutes}p</strong> (Pace: <span className="font-mono font-black">{targetRacePace} /km</span>).
                        </p>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-2xl self-start sm:self-auto font-mono text-xs">
                        <SvgIcon name="Flag" className="w-4 h-4 text-amber-400" />
                        <span>Race Date: <strong className="text-amber-400">{raceDateDetails.dayOfWeek}, {raceDate}</strong></span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { id: 'negative', name: 'Negative Split (Khuyên Dùng)', badge: 'TỐI ƯU PR', desc: `Nửa đầu chạy chậm hơn Target Pace 7s (${formatPace(targetRacePaceSec + 7)}/km) để tiết kiệm glycogen. Nửa sau tăng tốc (${formatPace(targetRacePaceSec - 7)}/km) cán đích bứt phá!` },
                        { id: 'even', name: 'Even Pacing', badge: 'NHỊP ĐỒNG HỒ', desc: `Duy trì đều đặn đúng ${targetRacePace} /km từ vạch xuất phát đến đích như một chiếc máy đếm nhịp hoàn hảo.` },
                        { id: 'conservative', name: 'Conservative Start', badge: 'AN TOÀN TUYỆT ĐỐI', desc: `Xuất phát chậm hơn 12s (${formatPace(targetRacePaceSec + 12)}/km) làm nóng cơ thể, kiểm soát chuột rút và sốc nhiệt cho người mới chạy cự ly này.` }
                      ].map(t => {
                        const isSelected = selectedRaceTactic === t.id;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setSelectedRaceTactic(t.id)}
                            className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                              isSelected ? 'bg-amber-50 border-amber-400 shadow-md ring-2 ring-amber-400/40' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${isSelected ? 'bg-amber-400 text-black' : 'bg-slate-200 text-slate-600'}`}>{t.badge}</span>
                              {isSelected && <span className="text-xs font-black text-amber-600">Đang chọn ✓</span>}
                            </div>
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{t.name}</h4>
                            <p className="text-xs text-slate-600 mt-2 font-medium leading-relaxed">{t.desc}</p>
                          </button>
                        );
                      })}
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Bảng Phân Bổ Chặng Đua Chi Tiết ({selectedDistance})</h3>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                          <span>Chiến thuật:</span>
                          <span className="font-black text-amber-600 uppercase font-mono">{selectedRaceTactic === 'negative' ? 'Negative Split' : selectedRaceTactic === 'even' ? 'Even Pace' : 'Conservative'}</span>
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="border-b border-slate-200 text-slate-400 uppercase font-mono font-black">
                              <th className="py-2.5">Chặng (Km)</th>
                              <th className="py-2.5">Pace Thực Chiến</th>
                              <th className="py-2.5">Trạng Thái &amp; Nhịp Tim</th>
                              <th className="py-2.5">Kế Hoạch Nạp Gel &amp; Nước</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                            {dynamicRaceSplits.map((split, sIdx) => (
                              <tr key={sIdx} className="hover:bg-white/80 transition-colors">
                                <td className="py-3.5 font-black font-mono text-slate-900">{split.stageName}</td>
                                <td className="py-3.5 font-mono font-black text-amber-600 text-sm">{split.paceDesc}</td>
                                <td className="py-3.5 font-medium max-w-xs">{split.status}</td>
                                <td className="py-3.5 font-medium text-emerald-800">{split.nutrition}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: INFOGRAPHIC & BAR CHART */}
                {step === 5 && (
                  <div className="space-y-8">
                    <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                          INFOGRAPHIC TIẾN TRÌNH &amp; <span className="text-amber-500">THỂ LỰC TÍCH LŨY</span>
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">Đồng bộ theo thời gian thực với {dashboardStats.completedWorkouts} buổi chạy đã tích hoàn thành.</p>
                      </div>
                      <div className="bg-amber-50 border border-amber-300 px-4 py-2 rounded-2xl text-xs font-bold text-amber-900 flex items-center gap-2">
                        <SvgIcon name="Trophy" className="w-4 h-4 text-amber-700" />
                        <span>Mục tiêu: {selectedDistance} (Race: {raceDate})</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-slate-900 text-white p-6 rounded-3xl flex items-center justify-between shadow-sm">
                        <div>
                          <span className="text-xs font-black text-slate-400 uppercase tracking-wider block">Tỷ Lệ Tuân Thủ</span>
                          <p className="text-4xl font-black font-mono text-amber-400 mt-2">{dashboardStats.complianceRate}%</p>
                          <span className="text-[11px] text-slate-400 font-semibold">{dashboardStats.completedWorkouts} / {dashboardStats.totalWorkouts} buổi chạy</span>
                        </div>
                        <div className="w-16 h-16 rounded-full border-4 border-amber-400/20 border-t-amber-400 flex items-center justify-center font-mono font-black text-lg">
                          {dashboardStats.complianceRate}%
                        </div>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-wider block">Km Đã Hoàn Thành</span>
                        <p className="text-4xl font-black font-mono text-slate-900 mt-2">{dashboardStats.actualKmDone} <span className="text-sm font-black text-slate-500">km</span></p>
                        <span className="text-[11px] text-slate-500 font-semibold">Kế hoạch tổng: {dashboardStats.plannedKm} km</span>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-wider block">VDOT Phong Độ</span>
                        <p className="text-4xl font-black font-mono text-slate-900 mt-2">{currentVDOT} <span className="text-sm font-black text-amber-600">PTS</span></p>
                        <span className="text-[11px] text-slate-500 font-semibold">Target Pace: {targetRacePace} /km</span>
                      </div>
                    </div>

                    {/* BAR CHART */}
                    <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <SvgIcon name="BarChart2" className="w-5 h-5 text-amber-500" />
                            <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-wide">
                              Biểu Đồ Khối Lượng Từng Tuần ({trainingPlan?.totalWeeks || weeklyProgressData.length} Tuần)
                            </h3>
                          </div>
                          <p className="text-xs text-slate-500 font-medium mt-1">
                            Tuần {trainingPlan?.totalWeeks || weeklyProgressData.length} là tuần thi đấu chính thức (Race Week: {raceDateDetails.dayOfWeek}, {raceDate})
                          </p>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold self-start sm:self-auto bg-white px-3.5 py-2 rounded-xl border border-slate-200">
                          <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-md bg-slate-300" /><span className="text-slate-600">Kế hoạch</span></div>
                          <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-md bg-amber-400" /><span className="text-slate-900">Thực tế</span></div>
                        </div>
                      </div>

                      <div className="relative pt-6 pb-2 overflow-x-auto weekly-chart-scroll">
                        <div
                          className="grid gap-1.5 sm:gap-3 items-end h-56 sm:h-64 pt-6 px-1 relative z-10 min-w-full"
                          style={{
                            gridTemplateColumns: `repeat(${Math.max(1, weeklyProgressData.length)}, minmax(36px, 36px))`,
                            width: `${Math.max(1, weeklyProgressData.length) * 44}px`
                          }}
                        >
                          {weeklyProgressData.map((w, idx) => {
                            const plannedH = Math.min(100, Math.round((w.plannedKm / maxScale) * 100));
                            const actualH = Math.min(100, Math.round((w.actualKm / maxScale) * 100));
                            const isComp = w.plannedKm > 0 && w.actualKm >= w.plannedKm;
                            const isHovered = hoveredWeekIdx === idx;
                            const isRaceWeek = idx === weeklyProgressData.length - 1;

                            return (
                              <div
                                key={w.weekNumber}
                                onMouseEnter={() => setHoveredWeekIdx(idx)}
                                onMouseLeave={() => setHoveredWeekIdx(null)}
                                className="h-full flex flex-col justify-end items-center group relative cursor-pointer"
                              >
                                {isHovered && (
                                  <div className="absolute -top-16 z-30 bg-slate-900 text-white text-[11px] p-2.5 rounded-xl shadow-xl border border-slate-700 whitespace-nowrap text-center pointer-events-none">
                                    <p className="font-mono font-black text-amber-400">{isRaceWeek ? `🏁 TUẦN ${w.weekNumber}: RACE WEEK` : `Tuần ${w.weekNumber}`}</p>
                                    <p className="font-semibold text-slate-300 mt-0.5">Thực tế: <span className="font-mono font-black text-white">{w.actualKm} km</span> / {w.plannedKm} km</p>
                                    <p className="text-[10px] text-emerald-400 font-bold">Đạt {w.completionRate}% • {w.completedWorkouts}/{w.totalWorkouts} buổi</p>
                                  </div>
                                )}
                                <span className={`text-[10px] font-mono font-black mb-1 ${w.actualKm > 0 ? 'text-amber-600' : 'text-slate-400'}`}>
                                  {w.actualKm > 0 ? `${w.actualKm}` : '0'}
                                </span>
                                <div className="w-full flex items-end justify-center gap-1 sm:gap-1.5 h-full pb-1">
                                  <div
                                    className="w-2.5 sm:w-4 bg-slate-200 group-hover:bg-slate-300 rounded-t-md transition-all duration-300"
                                    style={{ height: `${plannedH}%` }}
                                    title={`Tuần ${w.weekNumber} Kế hoạch: ${w.plannedKm} km`}
                                  />
                                  <div
                                    className={`w-2.5 sm:w-4 rounded-t-md transition-all duration-300 shadow-xs ${
                                      isComp
                                        ? 'bg-emerald-500 shadow-emerald-400/20'
                                        : w.actualKm > 0
                                          ? 'bg-amber-400 group-hover:bg-amber-300 shadow-amber-400/20'
                                          : 'bg-amber-400/20'
                                    }`}
                                    style={{ height: `${Math.max(4, actualH)}%` }}
                                  />
                                </div>
                                <div className="mt-2 text-center">
                                  <span className={`text-[10px] sm:text-xs font-mono font-black block ${
                                    isRaceWeek ? 'text-amber-600 font-black' : isHovered ? 'text-amber-600' : 'text-slate-600'
                                  }`}>
                                    {isRaceWeek ? '🏁' : `T${w.weekNumber}`}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </main>
            </div>
          </div>

          {}
          {showCustomRaceModal && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-7 space-y-5 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-base font-black text-slate-900 uppercase">Thêm Giải Chạy</h3>
                    <p className="text-[11px] text-slate-500 font-semibold">Lưu thông tin giải đấu tùy chỉnh</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowCustomRaceModal(false)}
                    className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 cursor-pointer"
                  >
                    <SvgIcon name="X" className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] font-black text-slate-500 uppercase block mb-1">Tiêu đề</label>
                    <input type="text" value={customRaceTitle} onChange={e => setCustomRaceTitle(e.target.value)} placeholder="VD: Giải chạy mùa xuân" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-500 uppercase block mb-1">Tên giải chạy</label>
                    <input type="text" value={customRaceName} onChange={e => setCustomRaceName(e.target.value)} placeholder="VD: Vietnam Trail Run 2027" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-black text-slate-500 uppercase block mb-1">Địa điểm tổ chức</label>
                      <input type="text" value={customRaceLocation} onChange={e => setCustomRaceLocation(e.target.value)} placeholder="VD: Đà Lạt" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-500 uppercase block mb-1">Ngày diễn ra</label>
                      <input type="date" value={customRaceDate} onChange={e => setCustomRaceDate(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-mono font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-500 uppercase block mb-2">Cự ly</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['5K', '10K', '21K', '42K'].map(distance => {
                        const isChecked = customRaceDistances.includes(distance);
                        return (
                          <label key={distance} className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-black cursor-pointer transition-colors ${isChecked ? 'bg-amber-400 border-amber-400 text-black' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}>
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={e => {
                                setCustomRaceDistances(prev => e.target.checked ? [...prev, distance] : prev.filter(d => d !== distance));
                              }}
                              className="accent-black"
                            />
                            {distance}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAddCustomRace}
                  disabled={!customRaceTitle.trim() || !customRaceName.trim() || !customRaceLocation.trim() || !customRaceDate || customRaceDistances.length === 0}
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed text-black text-xs font-black uppercase tracking-wide transition-colors cursor-pointer"
                >
                  Thêm &amp; Đồng Bộ Giải Chạy
                </button>
              </div>
            </div>
          )}
          {/* MULTI-PLAN MANAGER MODAL */}
          {showCommunityModal && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-7 space-y-5 shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 shrink-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-400 text-black flex items-center justify-center font-black shadow-md shadow-amber-400/20">
                      <SvgIcon name="Folder" className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-slate-900 uppercase">Kho Giáo Án &amp; Mùa Giải</h3>
                      <p className="text-[11px] text-slate-500 font-semibold">VĐV: <strong className="text-slate-800">{athleteName}</strong> ({savedPlans.length} Kế hoạch)</p>
                    </div>
                  </div>
                  <button onClick={() => setShowCommunityModal(false)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 cursor-pointer">
                    <SvgIcon name="X" className="w-4 h-4" />
                  </button>
                </div>

                {/* FORM TẠO PLAN MỚI */}
                {showNewPlanForm ? (
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border-2 border-amber-300 space-y-4 overflow-y-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-amber-950 uppercase tracking-wide">Tạo Kế Hoạch / Mùa Giải Mới</span>
                      <button onClick={() => setShowNewPlanForm(false)} className="text-[11px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer">Hủy</button>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="text-[10px] font-black text-slate-500 uppercase block">Tên Kế Hoạch / Giải Chạy</label>
                          <span className="text-[9px] font-bold text-amber-700">Chọn mẫu nhanh bên dưới:</span>
                        </div>
                        <input
                          type="text"
                          placeholder="VD: Mùa Giải 2026: VnExpress Marathon..."
                          value={newPlanTitle}
                          onChange={e => setNewPlanTitle(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        {/* QUICK PRESETS IN MODAL */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 pb-1 scrollbar-none">
                          {UPCOMING_MAJOR_RACES.slice(0, 3).map(r => (
                            <button
                              key={r.id}
                              type="button"
                              onClick={() => {
                                setNewPlanTitle(r.name);
                                setNewPlanDate(r.date);
                                setNewPlanDistance(r.defaultDistance);
                              }}
                              className="px-2 py-1 rounded-lg bg-white hover:bg-amber-100 border border-slate-200 text-[10px] font-bold text-slate-700 whitespace-nowrap cursor-pointer transition-colors"
                            >
                              ⚡ {r.name.split(' ')[0]} {r.location} ({r.date.slice(5)})
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] font-black text-slate-500 uppercase block mb-1">Cự Ly</label>
                          <select
                            value={newPlanDistance}
                            onChange={e => setNewPlanDistance(e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none"
                          >
                            <option value="5K (5.0 km)">5K (5.0 km)</option>
                            <option value="10K (10.0 km)">10K (10.0 km)</option>
                            <option value="Half Marathon (21.1 km)">Half Marathon (21.1 km)</option>
                            <option value="Full Marathon (42.2 km)">Full Marathon (42.2 km)</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-[10px] font-black text-slate-500 uppercase block mb-1">Ngày Race Day</label>
                          <input
                            type="date"
                            value={newPlanDate}
                            onChange={e => setNewPlanDate(e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-mono font-bold text-slate-800 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-black text-slate-500 uppercase block mb-1">Thời Gian Mục Tiêu</label>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-xl border border-slate-200">
                            <button onClick={() => setNewPlanHours(h => Math.max(0, h - 1))} className="w-5 h-5 bg-slate-100 rounded text-xs font-black cursor-pointer">-</button>
                            <span className="font-mono font-black text-xs w-6 text-center">{newPlanHours}h</span>
                            <button onClick={() => setNewPlanHours(h => Math.min(10, h + 1))} className="w-5 h-5 bg-slate-100 rounded text-xs font-black cursor-pointer">+</button>
                          </div>
                          <span className="font-black text-slate-400">:</span>
                          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-xl border border-slate-200">
                            <button onClick={() => setNewPlanMinutes(m => Math.max(0, m - 5))} className="w-5 h-5 bg-slate-100 rounded text-xs font-black cursor-pointer">-</button>
                            <span className="font-mono font-black text-xs w-8 text-center">{newPlanMinutes.toString().padStart(2, '0')}p</span>
                            <button onClick={() => setNewPlanMinutes(m => Math.min(55, m + 5))} className="w-5 h-5 bg-slate-100 rounded text-xs font-black cursor-pointer">+</button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-black text-slate-500 uppercase block mb-1">Ngày Rảnh Trong Tuần</label>
                        <div className="grid grid-cols-7 gap-1">
                          {ALL_WEEK_DAYS.map(dayName => {
                            const isSelected = newPlanDays.includes(dayName);
                            const short = dayName.replace('Thứ ', 'T').replace('Chủ Nhật', 'CN');
                            return (
                              <button
                                key={dayName}
                                type="button"
                                onClick={() => setNewPlanDays(prev => prev.includes(dayName) ? prev.filter(d => d !== dayName) : [...prev, dayName])}
                                className={`py-1.5 text-[10px] rounded-lg font-black transition-all cursor-pointer ${
                                  isSelected ? 'bg-amber-400 text-black shadow-xs' : 'bg-white border border-slate-200 text-slate-500'
                                }`}
                              >
                                {short}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleCreateNewPlan}
                        className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wide cursor-pointer shadow-md transition-all"
                      >
                        Tạo &amp; Đồng Bộ Lập Giáo Án Ngay
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowNewPlanForm(true)}
                    className="w-full py-2.5 rounded-2xl border-2 border-dashed border-amber-300 hover:border-amber-400 bg-amber-50/50 hover:bg-amber-50 text-amber-900 font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
                  >
                    <SvgIcon name="Plus" className="w-4 h-4" />
                    <span>+ Thêm Kế Hoạch / Mùa Giải Mới Cho {athleteName}</span>
                  </button>
                )}

                {/* DANH SÁCH CÁC PLAN CỦA VĐV */}
                <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 scrollbar-thin">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Các Mùa Giải Đã Lưu:</span>
                  {savedPlans.map(plan => {
                    const isActive = activePlanId === plan.id;
                    return (
                      <div
                        key={plan.id}
                        onClick={() => handleSelectPlan(plan)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isActive
                            ? 'bg-amber-50 border-amber-400 shadow-md ring-2 ring-amber-300/60'
                            : 'bg-slate-50/80 border-slate-200 hover:bg-slate-100/80'
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs font-black text-slate-900 uppercase min-w-0 flex-1">
                              <AutoScrollText text={plan.title} className="w-full max-w-full" />
                            </h4>
                            {isActive && <span className="px-2 py-0.5 rounded-md bg-amber-400 text-black text-[9px] font-black uppercase">Đang Chạy</span>}
                          </div>
                          <p className="text-[11px] font-bold text-slate-600 mt-1">
                            {plan.distance} • Mục tiêu: <span className="text-amber-600 font-mono font-black">{plan.targetTime}</span> (Pace {plan.targetPace || '6:24'}/km)
                          </p>
                          <div className="flex items-center gap-3 mt-1.5 text-[10px] text-slate-400 font-semibold">
                            <span>Race: {plan.raceDate}</span>
                            <span>•</span>
                            <span className="text-emerald-700 font-bold">{plan.availableDays ? plan.availableDays.length : 4} buổi/tuần</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); handleSelectPlan(plan); }}
                            className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors cursor-pointer ${
                              isActive ? 'bg-black text-amber-400' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                            }`}
                          >
                            Xem Lịch
                          </button>
                          {savedPlans.length > 1 && (
                            <button
                              type="button"
                              onClick={(e) => handleDeletePlan(e, plan.id)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                              title="Xóa kế hoạch này"
                            >
                              <SvgIcon name="Trash2" className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {}
          {/* ATHLETE MODAL (DEDUPLICATED & ISOLATED) */}
          {showAthleteModal && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl w-full max-w-md p-6 sm:p-7 space-y-5 shadow-2xl border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-400 text-black flex items-center justify-center font-black shadow-md shadow-amber-400/20">
                      <SvgIcon name="Users" className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-slate-900 uppercase">Hồ Sơ Vận Động Viên</h3>
                      <p className="text-[11px] text-slate-500 font-semibold">Mỗi VĐV sở hữu kho giáo án &amp; dữ liệu riêng</p>
                    </div>
                  </div>
                  <button onClick={() => setShowAthleteModal(false)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 cursor-pointer">
                    <SvgIcon name="X" className="w-4 h-4" />
                  </button>
                </div>

                {/* ACTIVE ATHLETE BANNER */}
                <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-center justify-between shadow-xs">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-black text-slate-900">{athleteName}</span>
                      <span className="text-[9px] font-black bg-black text-amber-400 px-1.5 py-0.5 rounded">Đang chọn</span>
                    </div>
                    <p className="text-[10px] font-mono font-bold text-amber-700 mt-0.5">{athleteId} • {savedPlans.length} Plan</p>
                  </div>
                  <button
                    onClick={() => {
                      const dummy = document.createElement('textarea');
                      dummy.value = `${window.location.origin}/?athlete=${athleteId}`;
                      document.body.appendChild(dummy);
                      dummy.select();
                      document.execCommand('copy');
                      document.body.removeChild(dummy);
                      setCopyNotification(true);
                      setTimeout(() => setCopyNotification(false), 2000);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-[10px] font-black uppercase tracking-wider cursor-pointer shadow-xs"
                  >
                    {copyNotification ? 'Đã sao chép!' : 'Sao chép link'}
                  </button>
                </div>

                {/* ATHLETE LIST */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block px-1">
                    Danh Sách VĐV Khác ({savedAthletes.length} VĐV đã lưu)
                  </span>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                    {savedAthletes.map(ath => {
                      const isCurrent = ath.id === athleteId;
                      const athPlans = getAthletePlans(ath.id);

                      return (
                        <div
                          key={ath.id}
                          className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${
                            isCurrent
                              ? 'bg-amber-50/50 border-amber-300 ring-1 ring-amber-300'
                              : 'border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${
                              isCurrent ? 'bg-amber-400 text-black' : 'bg-slate-200 text-slate-700'
                            }`}>
                              {ath.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-xs font-black text-slate-800">{ath.name}</p>
                              <p className="text-[10px] font-mono text-slate-400 font-bold">{ath.id} • <span className="text-amber-600 font-black">{athPlans.length} Plan</span></p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5">
                            {!isCurrent ? (
                              <button
                                type="button"
                                onClick={() => handleSwitchAthlete(ath)}
                                className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-amber-400 hover:text-black text-white text-[10px] font-black uppercase tracking-wider transition-colors cursor-pointer"
                              >
                                Chọn
                              </button>
                            ) : (
                              <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-2 py-1 rounded-lg">
                                Đang xem
                              </span>
                            )}

                            {savedAthletes.length > 1 && (
                              <button
                                type="button"
                                onClick={(e) => handleDeleteAthlete(e, ath.id)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                title="Xóa VĐV này"
                              >
                                <SvgIcon name="Trash2" className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* FORM TẠO VĐV MỚI */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="Tên VĐV mới (VD: Anh Dũng)..."
                      value={newAthleteNameInput}
                      onChange={e => setNewAthleteNameInput(e.target.value)}
                      className="col-span-2 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                    <input
                      type="text"
                      placeholder="Mã VĐV..."
                      value={newAthleteIdInput}
                      onChange={e => setNewAthleteIdInput(e.target.value)}
                      className="col-span-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-black text-slate-800 uppercase focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (!newAthleteNameInput.trim()) return;
                      const rawId = newAthleteIdInput.trim() ? newAthleteIdInput.trim().toUpperCase() : `VĐV-${Date.now().toString().slice(-4)}`;
                      const newId = rawId.replace(/\s+/g, '-');
                      const newAth = { id: newId, name: newAthleteNameInput.trim() };

                      setSavedAthletes(prev => {
                        const filtered = prev.filter(a => a.id !== newId);
                        return [...filtered, newAth];
                      });

                      const initialPlan = {
                        id: `PLAN-${newId}-1`,
                        title: `Mùa Giải: ${newAthleteNameInput.trim()} 2026`,
                        distance: 'Half Marathon (21.1 km)',
                        targetTime: '02:00',
                        targetPace: '5:41',
                        raceDate: '2026-11-29',
                        availableDays: ['Thứ 3', 'Thứ 5', 'Thứ 7', 'Chủ Nhật']
                      };
                      localStorage.setItem(`runcoach_plans_${newId}`, JSON.stringify([initialPlan]));

                      setNewAthleteNameInput('');
                      setNewAthleteIdInput('');
                      handleSwitchAthlete(newAth);
                    }}
                    className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wide cursor-pointer shadow-sm transition-all"
                  >
                    + Thêm VĐV Mới &amp; Tạo Kho Plan Ngay
                  </button>
                </div>
              </div>
            </div>
          )}

          {}
          {/* AI SETTINGS MODAL */}
          {showAiModal && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl w-full max-w-md p-6 sm:p-7 space-y-5 shadow-2xl border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-400 text-black flex items-center justify-center font-black">
                      <SvgIcon name="Sparkles" className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-black text-slate-900 uppercase">Cấu Hình AI Gemini</h3>
                  </div>
                  <button onClick={() => setShowAiModal(false)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 cursor-pointer">
                    <SvgIcon name="X" className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-black text-slate-500 uppercase block mb-1">Mô hình AI</label>
                    <input
                      type="text"
                      disabled
                      value={aiEngineStatus.modelName}
                      className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-black text-slate-500 uppercase block mb-1">Google Gemini API Key</label>
                    <input
                      type="password"
                      placeholder="AIzaSy..."
                      value={geminiApiKey}
                      onChange={e => setGeminiApiKey(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800"
                    />
                  </div>

                  <button
                    onClick={() => {
                      localStorage.setItem('runcoach_gemini_api_key', geminiApiKey.trim());
                      setShowAiModal(false);
                    }}
                    className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wide cursor-pointer"
                  >
                    Lưu Cài Đặt
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SETTINGS MODAL */}
          {showSettingsModal && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl w-full max-w-md p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-400 text-black flex items-center justify-center font-black">
                      <SvgIcon name="Settings" className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-black text-slate-900 uppercase">Cài Đặt Hệ Thống</h3>
                  </div>
                  <button onClick={() => setShowSettingsModal(false)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 cursor-pointer">
                    <SvgIcon name="X" className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4 text-xs font-semibold text-slate-700">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span>Định dạng tệp</span>
                    <span className="font-bold text-amber-700">Single-File HTML (Portable)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span>Font chữ</span>
                    <span className="font-bold text-slate-900">Montserrat Athletic</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => { setShowSettingsModal(false); setShowAiModal(true); }}
                    className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
                  >
                    Cấu Hình Gemini API Key
                  </button>
                </div>
              </div>
            </div>
          )}

          <nav
            className="md:hidden fixed bottom-0 left-0 right-0 z-[45] grid grid-cols-5 gap-1 px-2 pt-2 bg-[#0B0D11]/95 backdrop-blur-xl border-t border-white/10 pb-[calc(0.5rem+env(safe-area-inset-bottom))]"
            aria-label="Điều hướng chính"
          >
            {[
              { id: 'home', icon: 'Activity', label: 'Trang chủ', target: 1 },
              { id: 'plan', icon: 'Calendar', label: 'Kế hoạch', target: 2 },
              { id: 'workouts', icon: 'Layers', label: 'Giáo án', target: 3 },
              { id: 'race', icon: 'Trophy', label: 'Race Day', target: 4 },
              { id: 'stats', icon: 'BarChart2', label: 'Thống kê', target: 5 },
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => { setActiveTab(item.id); setStep(item.target); }}
                className={`min-h-12 rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${
                  activeTab === item.id
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-label={item.label}
              >
                <SvgIcon name={item.icon} className="w-4 h-4" />
                <span className="text-[8px] font-black leading-none">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      );
    }

export default App;
