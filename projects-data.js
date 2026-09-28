/**
 * 黃婉綾 個人作品集資料庫
 * 資料來源：黃婉綾 備審資料 PDF
 * 支援雙視角切換：醫學資訊視角 (med)、資工/AI視角 (cs)、完整版 (all)
 * 風格原則：70% 自然實作 + 30% 研究思維，用詞嚴謹誠實
 */

export const personalInfo = {
  name: "黃婉綾",
  nameEn: "HUANG, WAN-LING",
  title: "智慧醫療與永續管理 | 跨領域軟體與 AI 系統開發",
  traits: ["負責", "努力", "執行力高", "有耐心", "具備領導力"],
  contact: {
    email: "12400654@me.mcu.edu.tw",
    phone: "0971-725-609",
    avatar: "assets/avatar.jpg"
  },
  education: {
    school: "銘傳大學",
    dept: "智慧醫療與永續管理學系（原 醫療資訊與管理學系）",
    period: "112.9 - 迄今",
    courses: [
      "醫療訊號處理實作", "醫學資訊實驗", "深度學習與應用",
      "網頁程式設計", "系統分析與設計", "數位影像處理", "行動裝置程式設計"
    ]
  },
  internship: {
    unit: "臺大醫院 資訊室",
    period: "115.7 - 115.8",
    items: [
      "臨床資料視覺化儀表板開發",
      "AI 智慧輔助工具的導入與維護",
      "智慧醫療知識庫問答系統開發"
    ]
  },
  teaching: [
    { sem: "113-1", role: "程式設計(一) TA" },
    { sem: "113-2", role: "程式設計(二) TA" },
    { sem: "115-1", role: "系統分析與設計 TA" },
    { sem: "115-1", role: "網頁程式設計 TA" }
  ],
  leadership: [
    { sem: "113-2 ~ 115-1", role: "班代" }
  ],
  awards: [
    { sem: "112-1", title: "健康暨醫學工程學院 書卷獎" },
    { sem: "112-2", title: "銘傳大學創辦人李應兆優良學生獎學金" },
    { sem: "113-1", title: "健康暨醫學工程學院 書卷獎" },
    { sem: "113-1", title: "銘傳大學應兆優良學生獎學金" },
    { sem: "113-2", title: "健康暨醫學工程學院 書卷獎" },
    { sem: "113-2", title: "銘傳大學德明模範學生獎學金" },
    { sem: "114-1", title: "銘傳大學創辦人包德明模範學生獎學金" }
  ],
  certifications: [
    { name: "TQC+ 基礎行動裝置應用程式設計 Android 9", level: "實用級" },
    { name: "TQC+ 基礎程式語言 Python 3", level: "實用級" }
  ],
  skills: {
    software: ["C#", "ASP.NET Core", "Python", "PyQt5", "HTML/CSS/JavaScript", "Android APP", "SQL Server", "ChromaDB", "PyTorch", "OpenCV"],
    hardware: ["Arduino Uno", "ESP32", "MAX30102 PPG", "PN532 NFC", "SGP30 CO2", "MLX90614 紅外體溫", "VL53L1X 雷射測距", "CanMV-K230 邊緣運算"]
  }
};

export const corePillars = [
  {
    num: "01",
    enTitle: "Medical AI & CDSS",
    zhTitle: "醫療 AI × 臨床決策支援",
    tech: "LLM · Clinical Knowledge · Rule-based Reasoning",
    desc: "結合大型語言模型與規則式推論，建立醫療報告解析與風險分類之決策支援原型。"
  },
  {
    num: "02",
    enTitle: "Data & Knowledge Engineering",
    zhTitle: "醫療資料 × 知識工程",
    tech: "Data Processing · ETL · Semantic Mapping",
    desc: "建立具來源追蹤機制之可追溯知識架構，整合跨科別資料並落實標準化管線。"
  },
  {
    num: "03",
    enTitle: "AI & Computer Vision",
    zhTitle: "深度學習 × 電腦視覺",
    tech: "PyTorch · Image Processing · Object Detection",
    desc: "應用影像處理與深度學習進行影像特徵分析、雙線性曲面展開與目標辨識。"
  },
  {
    num: "04",
    enTitle: "Biomedical IoT & Sensing",
    zhTitle: "生醫物聯網 × 多源感測",
    tech: "ESP32 · Sensor Fusion · Non-contact Monitoring",
    desc: "整合多源感測資料，建立非接觸式健康監測與異常預警流程。"
  }
];

export const viewConfigs = {
  med: {
    key: "med",
    name: "醫學資訊 / 醫療 AI",
    badge: "Medical Informatics & AI Lens",
    heroSubtitle: "以臨床需求與醫療流程為核心，結合大型語言模型、資料分析與系統開發，建立實證導向之智慧醫療決策支援原型。",
    order: ["clinical-dashboard", "health-iot", "rag-qa", "dewarp-ocr", "biosignal-game", "xpark-yolo", "culture-ticket"]
  },
  cs: {
    key: "cs",
    name: "資工 / AI / 系統開發",
    badge: "CS, Systems & AI Engineering Lens",
    heroSubtitle: "聚焦於演算法優化、多模態感測融合、高可用資料管線與邊緣運算，落實具備容錯與高效能的軟硬整合架構。",
    order: ["clinical-dashboard", "dewarp-ocr", "health-iot", "rag-qa", "biosignal-game", "xpark-yolo", "culture-ticket"]
  },
  all: {
    key: "all",
    name: "完整作品總覽",
    badge: "Full Portfolio Overview",
    heroSubtitle: "涵蓋智慧醫療系統、邊緣感測物聯網、電腦視覺演算法與全端應用之跨領域專案成果。",
    order: ["clinical-dashboard", "rag-qa", "health-iot", "dewarp-ocr", "biosignal-game", "xpark-yolo", "culture-ticket"]
  }
};

export const projects = [
  {
    id: "clinical-dashboard",
    category: "實習作品",
    period: "114學年 07~08月",
    unit: "臺大醫院 資訊室",
    techStack: ["C#", "ASP.NET Core", "JavaScript", "HTML/CSS", "SQL Server", "Google Gemini", "Local LLM API", "MiniExcel", "Chart.js"],
    images: [
      { src: "assets/projects/clinical_dashboard.png", caption: "三級風險分流互動儀表板與 AI 智慧自適應配置介面" },
      { src: "assets/projects/clinical_charts1.png", caption: "單一病人傷口狀況折線圖追蹤" },
      { src: "assets/projects/clinical_charts2.png", caption: "病患入院後轉床甘特圖動態視覺化" }
    ],
    perspectives: {
      med: {
        title: "臨床資料視覺化儀表板與決策支援原型",
        subtitle: "突破傳統醫療報表維度單一與格式異質限制，將複雜臨床數據轉化為三級風險分流互動儀表板",
        lead: "針對臨床檢驗與病理報告解讀門檻高的問題，結合大型語言模型與臨床共識知識庫，建立風險分類原型與動態圖表呈現，輔助醫療人員掌握病患狀況。",
        keywords: ["臨床決策支援原型", "三級風險分流", "非結構化報告解析", "傷口追蹤折線圖", "病患轉床甘特圖"]
      },
      cs: {
        title: "LLM-based 臨床風險分析與自適應視覺化系統",
        subtitle: "整合本地 LLM、MiniExcel 串流解析與 SQL Server 倉儲之混合式推論與高效圖表渲染架構",
        lead: "針對非結構化醫療文本建立資料自適應解析流程，串接 Gemini 與本地 Local LLM，以自然語言指令動態生成分類規則與卡片配置，支援高效圖表渲染與快取容錯。",
        keywords: ["Hybrid LLM", "MiniExcel 串流解析", "SQL Server 倉儲", "ASP.NET Core", "動態規則推論", "快取容錯"]
      }
    },
    sars: {
      situation: "傳統醫療報表維度單一、格式異質且解讀門檻高。臨床檢驗與病理數據量龐大且多為非結構化文本，醫護人員難以在短時間內完成多維度風險判讀與跨科別病況追蹤。",
      action: "1. 串接 Google Gemini 與本地 Local LLM API，支援醫護人員在 AI 討論框以自然語言輸入代碼對照、分類要求與表格卡片設計需求，自動生成確認表與動態配置。\n2. 建構三級風險分級規則（High Risk、Normal Healed、Benign Active），根據臨床共識知識庫自動標註與分流。\n3. 後端結合 MiniExcel 串流解析與 SQL Server 倉儲，支援高效率圖表渲染、歷史衝突主動警示與快取容錯。\n4. 整合 Chart.js 開發單一病人傷口狀況折線圖與入院轉床歷程甘特圖。",
      result: "成功將繁複的病理與檢驗報告轉化為三色風險分級互動儀表板，提供直觀之單筆病患詳細病歷穿透檢視，有效降低臨床數據解讀門檻與跨科別溝通時間成本。",
      summary: "本專案驗證了 LLM 結合結構化規則引擎（Heuristic Rules）在臨床輔助決策的高可行性；未來架構可進一步拓展為標準 FHIR 格式對接，擴大跨院際系統互通性。"
    }
  },
  {
    id: "rag-qa",
    category: "實習作品",
    period: "114學年 07~08月",
    unit: "臺大醫院 資訊室",
    techStack: ["Python", "C#", "JavaScript", "RAG", "Google Gemini API", "Multilingual-E5", "ChromaDB", "SQLite", "ASP.NET Core", "PyQt5", "BeautifulSoup4"],
    images: [
      { src: "assets/projects/rag_qa_system.png", caption: "智慧醫療知識庫問答系統：問答解析、來源指引標註與衛教單匯出" },
      { src: "assets/projects/rag_etl_pipeline.png", caption: "全自動化知識庫管理與資料萃取管線（網址爬蟲、PDF 解析、分段向量化）" }
    ],
    perspectives: {
      med: {
        title: "智慧醫療知識庫問答與衛教指引檢索系統",
        subtitle: "整合臺大醫院 39 科別分散衛教資源，建立具來源追蹤機制之可追溯衛教問答架構",
        lead: "整合院內跨科別衛教資源，透過檢索增強生成（RAG）技術，精準回答醫療衛教問題並標註權威指引出處，一鍵生成衛教單提供病人與家屬使用。",
        keywords: ["39 科別衛教整合", "RAG 檢索增強生成", "來源追蹤機制", "醫療防幻覺", "衛教單生成"]
      },
      cs: {
        title: "自動化 ETL 管線與向量 RAG 醫療知識問答引擎",
        subtitle: "建置爬蟲、PDF 解析、文字切塊至 E5 向量嵌入之全自動 ETL 管線與 ChromaDB 檢索架構",
        lead: "採用 BeautifulSoup4 與 PDF 解析引擎建立自動化文本萃取管線，搭配 Multilingual-E5 Embeddings 與 ChromaDB 建立本地向量索引，結合 Gemini API 實現高精準度語意檢索。",
        keywords: ["Automated ETL", "ChromaDB 向量資料庫", "Multilingual-E5", "Gemini API", "Prompt Engineering", "PyQt5 / ASP.NET"]
      }
    },
    sars: {
      situation: "臺大醫院 39 科別之衛教文獻與衛教單資源分散於各科網站與不同格式文件，傳統關鍵字檢索耗時且缺乏脈絡；直接使用通用 LLM 則容易產生醫療幻覺，無法直接應用於醫療諮詢場景。",
      action: "1. 開發自動化 ETL 管線：運用 BeautifulSoup4 與 PDF 解析工具，採集網頁衛教文章與文件，進行語意分段（Chunking）與結構化 QA 萃取。\n2. 建立向量檢索庫：採用 Multilingual-E5 Embeddings 向量化文本，存入 ChromaDB 本地向量資料庫。\n3. RAG 檢索增強推論：使用者提問後，由系統檢索出相關度最高之 Top-3 衛教問答塊作為 Context，並透過 Prompt 約束 Gemini API 僅根據檢索內容作答，同時標註來源依據。\n4. 開發跨平台操作介面：支援關鍵字搜尋、原始文章溯源、以及一鍵匯出「國立臺灣大學醫學院附設醫院 臨床衛教指導單」。",
      result: "建立具來源追蹤機制之衛教知識庫問答流程，有效降低 LLM 醫療幻覺風險，顯著提升醫護人員檢索衛教指引之效率，並提供標準化病患衛教單產出機制。",
      summary: "掌握了非結構化醫學文獻自動化入庫與向量檢索的落地流程；未來可引入 BM25 + Dense Vector 混合檢索（Hybrid Search）與 Reranker 模型，進一步優化專業罕見醫學名詞之檢索召回率。"
    }
  },
  {
    id: "health-iot",
    category: "研究計畫（進行中）",
    period: "架構設計與核心開發",
    unit: "智慧醫療研究計畫",
    techStack: ["Python", "PyTorch", "OpenCV", "C#", "ESP32", "CanMV-K230", "MLX90614 DCI", "VL53L1X", "AM2320", "毫米波雷達", "LINE Bot API"],
    images: [
      { src: "assets/projects/health_iot_arch.jpg", caption: "非接觸式健康預警與自動化管理系統架構圖與異常警示流程" }
    ],
    perspectives: {
      med: {
        title: "基於深度學習之非接觸式健康預警與自動化管理系統",
        subtitle: "整合體溫、呼吸、心率與聲音等多源感測資訊，建立連續性健康預警機制",
        lead: "突破傳統人工量測與單一體溫篩檢限制，於入口端與場域內連續監測生理與行為特徵，於異常時自動觸發通報，支援長照與機構之即時健康管理。",
        keywords: ["非接觸健康監測", "多源生理感測", "連續預警機制", "長照智慧管理", "異常自動通報"]
      },
      cs: {
        title: "多模態邊緣運算健康監測與自動化預警架構",
        subtitle: "結合 Sensor Fusion、校正回歸模型、CanMV-K230 邊緣 AI 與即時通訊管線",
        lead: "整合非接觸紅外熱電堆、雷射測距與環境溫濕度進行校正回歸，搭配毫米波雷達與邊緣影像辨識模組，建構「資料蒐集 ➔ 邊緣 AI 分析 ➔ 異常判斷 ➔ 即時警示」閉環架構。",
        keywords: ["Sensor Fusion", "Edge AI (K230)", "ESP32", "PyTorch", "校正回歸模型", "LINE Bot Webhook"]
      }
    },
    sars: {
      situation: "傳統健康量測仰賴人工操作且多為接觸式單次篩檢，容易造成人力負擔與交叉感染風險；且缺乏連續性生理監測，難以在第一時間偵測到長者或病患的早期異常徵兆。",
      action: "1. 門口門禁系統：整合 MLX90614 DCI 紅外溫度感測器、VL53L1X 雷射測距模組與 AM2320 溫濕度感測器，透過 ESP32 進行人臉測距與環境溫濕度校正回歸，維持測溫精準度。\n2. 場域內監測設備：採用毫米波雷達監測心率與呼吸率，結合 CanMV-K230 邊緣運算板進行影像異常與聲音偵測。\n3. 後端系統與異常警示流程：後端伺服器接收多源感測數據並進行深度學習特徵分析，當感測值異常或超過設定閾值時，立即截圖錄影並透過 LINE Bot API 自動發送簡訊與推播通報管理員。",
      result: "成功建構「資料蒐集 ➔ AI 分析 ➔ 異常辨識 ➔ 早期預警」的自動化健康管理流程，達成全非接觸式、多指標同步量測與即時異常告警。",
      summary: "展示了從感測器底層驅動、邊緣運算特徵萃取到雲端後端通報的完整 IoT 系統設計能力；未來將持續優化在複雜動態環境下的多感測器抗雜訊融合演算法。"
    }
  },
  {
    id: "dewarp-ocr",
    category: "期末作品",
    period: "114學年 第2學期",
    unit: "課程：數位影像處理",
    techStack: ["Python", "PyQt5", "Qt Designer", "OpenCV", "NumPy", "PyTesseract (Tesseract OCR)"],
    images: [
      { src: "assets/projects/dewarp_ocr_compare.png", caption: "8 點交互式控制框雙線性拉平校正前後對比與三種影像優化輸出" },
      { src: "assets/projects/dewarp_ocr_ui.png", caption: "全頁與局部自由框選 OCR 文字辨識操作介面" }
    ],
    perspectives: {
      med: {
        title: "智慧書冊與紙本文獻校正及 OCR 系統",
        subtitle: "針對翻拍彎曲畸變、光線不均及陰影遮擋，將普通照片轉換為清晰標準化掃描檔",
        lead: "將手持翻拍之紙本文獻、書籍或紙本病歷進行自動邊界抓取與曲面拉平，結合雙模式 OCR 文字辨識，加速文獻數位化建檔效率。",
        keywords: ["文件影像處理", "紙本數位化", "曲面拉平校正", "OCR 文字辨識", "陰影去除"]
      },
      cs: {
        title: "Bilinear Dewarping 演算法與多執行緒 OCR 影像處理系統",
        subtitle: "自主實作 8 點控制框雙線性曲面重投影演算法，搭配 PyQt5 WorkerThread 實現流暢即時處理",
        lead: "捨棄運算繁瑣之 3D 模型，以 Canny 邊緣檢測、凸包演算法與 8 點雙線性映射實現高效拉平；多執行緒架構確保大量 OCR 運算下 UI 介面流暢度。",
        keywords: ["Bilinear Dewarp", "OpenCV", "Canny / Convex Hull", "PyQt5 WorkerThread", "Tesseract OCR", "演算法優化"]
      }
    },
    sars: {
      situation: "手持翻拍書本與文件常面臨頁面彎曲畸變、光線不均、中縫陰影與透光等問題，導致文字辨識率低下；而傳統 3D 幾何重建演算法運算負載過高，難以在一般終端即時運行。",
      action: "1. 雙線性曲面重投影（Bilinear Dewarp）：捨棄高耗能 3D 模型，自主設計 8 點控制框數學模型，透過 Canny 邊緣檢測與凸包（Convex Hull）自動初選錨點，並支援使用者微調中縫頂點，進行座標逆映射拉平。\n2. 影像前處理管線：載入影像自動推算最佳捲曲與陰影值，提供「文件黑白、清晰灰階、原色優化」三種輸出濾鏡。\n3. 多執行緒架構：採用 PyQt5 QThread / WorkerThread 將 Tesseract OCR 辨識運算與 UI 主線程解耦，支援 2.5 倍局部細節放大與自由框選區塊萃取。",
      result: "達到高效率即時拉平校正與中縫對齊，顯著提升 OCR 辨識精準度，且在處理高解析度影像時維持使用者介面流暢操作體驗。",
      summary: "深刻體會到演算法選型中『數學模型簡化 vs 運算效能』的 Trade-off 價值；未來可進一步整合輕量化深度學習文本檢測模型（如 PaddleOCR / CRAFT）取代傳統計數法。"
    }
  },
  {
    id: "biosignal-game",
    category: "期末作品",
    period: "114學年 第2學期",
    unit: "課程：醫療訊號處理實作",
    techStack: ["Arduino Uno", "C#", "MAX30102", "Gravity PN532 NFC", "DFRobot LUX V30B", "Grove 超音波", "SGP30", "HC-05 藍牙 SPP"],
    images: [
      { src: "assets/projects/biosignal_hardware1.png", caption: "生醫訊號感測器整合硬體配置圖（Arduino Uno、PPG、NFC、藍牙、多維感測）" },
      { src: "assets/projects/biosignal_hardware2.png", caption: "MAX30102 心率血氧採集與 Gravity PN532 NFC 讀寫模組" },
      { src: "assets/projects/biosignal_game1.png", caption: "即時 PPG 脈搏波形渲染與 NFC 卡片寫入介面" },
      { src: "assets/projects/biosignal_game2.png", caption: "生醫訊號互動遊戲畫面：CO2 能量累積、光感加速與超音波跳躍" }
    ],
    perspectives: {
      med: {
        title: "生醫訊號互動遊戲與 EMR 隨身卡系統",
        subtitle: "將生理訊號採集轉化為遊戲互動，並結合 NFC 技術實現個人健康紀錄隨身攜帶",
        lead: "突破傳統生理量測枯燥且數據零散的限制，透過互動遊戲提高健康監測依從性，並將量測結果加密儲存於隨身 NFC 卡片中，建構登錄、監測、反饋閉環。",
        keywords: ["生理訊號遊戲化", "EMR 隨身健康卡", "PPG 脈搏波", "NFC 資料加密", "健康監測閉環"]
      },
      cs: {
        title: "即時 PPG 訊號處理與 NFC 區塊加密硬體整合系統",
        subtitle: "整合 Arduino 底層驅動、HC-05 藍牙 SPP 串流通訊與 C# 上位機即時波形渲染",
        lead: "採集 MAX30102 光體積變化描記圖（PPG）訊號並進行數位濾波與心率計算，透過 PN532 進行 NFC 區塊加密讀寫，並串接多維環境感測器打造即時回饋系統。",
        keywords: ["PPG Signal Processing", "Arduino", "NFC Block Encryption", "Bluetooth SPP", "C# 上位機", "嵌入式硬體整合"]
      }
    },
    sars: {
      situation: "傳統生理量測過程單調乏味，使用者缺乏長期監測動機；同時個人健康數據通常分散在不同設備，缺乏便捷且具隱私性的離線隨身攜帶與驗證載體。",
      action: "1. 感測端硬體整合：以 Arduino Uno 為核心，串接 MAX30102（PPG 脈搏波採集）、SGP30（CO2 氣體濃度）、DFRobot LUX V30B（環境光）、Grove 超音波測距模組與 HC-05 藍牙模組。\n2. NFC 加密儲存：運用 Gravity PN532 模組，將量測之即時心率、健康數據與遊戲分數加密寫入 NFC 扇區。\n3. C# 上位機遊戲開發：透過藍牙 SPP 接收訊號，即時繪製 PPG 脈搏波形；並將生理訊號映射至遊戲機制（CO2 濃度轉換為能量放大招、位移控制角色彈跳、環境亮度控制角色加速）。",
      result: "實現硬體端資料離線安全儲存與即時生理波形流暢呈現，成功打造具趣味性與實用性兼具的「登錄、監測、反饋」生醫資訊閉環原型。",
      summary: "實踐了從感測器硬體通訊協定（I2C/UART/SPP）、數位訊號處理到上位機即時圖形化應用的全流程軟硬體整合。"
    }
  },
  {
    id: "xpark-yolo",
    category: "期末作品",
    period: "114學年 第1學期",
    unit: "課程：簡介深度學習",
    techStack: ["Python", "PyQt5", "Qt Designer", "Ultralytics YOLO", "OpenCV", "NumPy", "JSON"],
    images: [
      { src: "assets/projects/xpark_yolo.png", caption: "Xpark 生物影像辨識、物種資料對應與樓層圖鑑收藏手冊介面" }
    ],
    perspectives: {
      med: {
        title: "Xpark 生物辨識與數位圖鑑收藏手冊",
        subtitle: "將影像辨識與水族館生態資料結合，協助參訪者快速辨識生物並建立個人化圖鑑",
        lead: "運用物件偵測技術辨識園區生物，自動對應館內生態科普資料，並依樓層建立個人化收藏手冊，提供具教育意義之數位導覽體驗。",
        keywords: ["深度學習", "生態圖鑑數位化", "互動導覽", "物種資訊對應"]
      },
      cs: {
        title: "基於 YOLO 之目標檢測與圖鑑管理系統",
        subtitle: "運用 Ultralytics YOLO 進行多類別物種定位與特徵辨識，整合 PyQt5 開發圖鑑應用",
        lead: "訓練並部署 YOLO 物件偵測模型，對輸入影像進行即時生物定位與分類，並透過 JSON 資料庫維護物種屬性與使用者收藏狀態。",
        keywords: ["Ultralytics YOLO", "Object Detection", "Computer Vision", "PyQt5", "JSON Database"]
      }
    },
    sars: {
      situation: "水族館等場域展示生物種類繁多，參訪者常面臨無法即時辨識生物名稱或深入了解其生態習性的問題，傳統解說牌互動性有限。",
      action: "1. 影像辨識管線：使用 Ultralytics YOLO 模型進行影像辨識與目標定位，圈選照片中的海洋生物。\n2. 資料對應與管理：解析辨識標籤並自 JSON 資料庫檢索對應之 Xpark 生物科普資料。\n3. 圖鑑系統設計：以 PyQt5 開發直觀圖鑑介面，區分「尚未完成辨識」與「成功辨識收藏」，並依樓層分類展示個人生物圖鑑。",
      result: "實現具實用性之生物影像辨識與即時科普資訊展示，提供直觀之個人化收藏體驗。",
      summary: "加深了對深度學習目標檢測工作流（資料標註、模型推論、UI 串接）的掌握度。"
    }
  },
  {
    id: "culture-ticket",
    category: "課外實作",
    period: "114學年 04月",
    unit: "課外實作專案",
    techStack: ["ASP.NET", "HTML", "CSS", "JavaScript", "jQuery UI"],
    images: [
      { src: "assets/projects/culture_ticket1.png", caption: "單頁應用（SPA）售票系統與即時動態金額計算" },
      { src: "assets/projects/culture_ticket2.png", caption: "拖放互動投票系統（Draggable & Droppable）與熱門活動排行" }
    ],
    perspectives: {
      med: {
        title: "日本文化祭售票與互動體驗系統",
        subtitle: "打造流暢單頁應用（SPA）與即時票價計算，提供直觀預覽與票務管理",
        lead: "改善傳統售票流程繁瑣之缺點，整合動態組件與即時計算動畫，提升購票與活動參與體驗。",
        keywords: ["單頁應用 SPA", "響應式介面", "動態金額計算", "使用者體驗優化"]
      },
      cs: {
        title: "高互動前端單頁應用（SPA）售票與拖放投票系統",
        subtitle: "深度整合 jQuery UI Draggable/Droppable、動態數值動畫與非同步元件",
        lead: "運用 jQuery UI 打造拖放式人氣投票系統與動態進度條，整合 DatePicker、AutoComplete 搜尋與即時金額計算動畫，呈現高流暢度前端架構。",
        keywords: ["jQuery UI", "Single Page Application", "DOM Manipulation", "Drag & Drop", "Numeric Animation"]
      }
    },
    sars: {
      situation: "傳統文化祭活動售票流程單一，介面缺乏即時反饋與活動氛圍，且購票與投票流程分散，使用者操作門檻較高。",
      action: "1. 單頁應用架構：整合 jQuery UI 多種元件打造無換頁 SPA 體驗。\n2. 拖放人氣投票：運用 Draggable & Droppable 技術，讓使用者以直觀拖放方式完成人氣投票。\n3. 動態計算與響應式組件：整合 DatePicker、AutoComplete 搜尋，並使用 jQuery animate 實作金額動態累加動畫。",
      result: "大幅降低使用者操作門檻，提供即時金額回饋與趣味性之互動投票機制。",
      summary: "精熟了前端 DOM 操作、事件驅動架構與微動畫回饋對使用者體驗的實質提升。"
    }
  }
];
