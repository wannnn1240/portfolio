import { personalInfo, corePillars, viewConfigs, projects } from './projects-data.js';

// 當前視角狀態（預設 'med'）
let currentView = 'med';

// DOM 元素引用
const lensBtns = document.querySelectorAll('.nav-lens-btn');
const heroBadgeText = document.getElementById('lens-badge-text');
const heroHeadline = document.getElementById('hero-headline');
const heroDesc = document.getElementById('hero-desc');
const pillarsContainer = document.getElementById('pillars-container');
const projectsContainer = document.getElementById('projects-container');

// 抽屜相關 DOM
const drawerBackdrop = document.getElementById('project-drawer');
const drawerCloseBtn = document.getElementById('drawer-close-btn');
const drawerCategory = document.getElementById('drawer-category');
const drawerTitle = document.getElementById('drawer-title');
const drawerMeta = document.getElementById('drawer-meta');
const drawerTechTags = document.getElementById('drawer-tech-tags');
const drawerSituation = document.getElementById('drawer-situation');
const drawerAction = document.getElementById('drawer-action');
const drawerResult = document.getElementById('drawer-result');
const drawerSummary = document.getElementById('drawer-summary');
const drawerGallery = document.getElementById('drawer-gallery-container');

/**
 * 從 URL 取得預設視角參數
 */
function initViewFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const viewParam = params.get('view') || params.get('focus');
  if (viewParam && (viewParam === 'med' || viewParam === 'cs' || viewParam === 'all')) {
    currentView = viewParam;
  } else {
    currentView = 'med';
  }
}

/**
 * 渲染四大核心研究與技術能力矩陣
 */
function renderPillars() {
  if (!pillarsContainer) return;

  pillarsContainer.innerHTML = corePillars.map(pillar => `
    <div class="pillar-card">
      <div class="pillar-header">
        <span class="pillar-num">${pillar.num}</span>
        <span class="pillar-en">${pillar.enTitle}</span>
      </div>
      <h3 class="pillar-title">${pillar.zhTitle}</h3>
      <div class="pillar-tech">${pillar.tech}</div>
      <p class="pillar-desc">${pillar.desc}</p>
    </div>
  `).join('');
}

/**
 * 更新視角狀態與介面渲染
 */
function setView(viewKey) {
  currentView = viewKey;
  const config = viewConfigs[viewKey] || viewConfigs.med;

  // 更新按鈕 active 狀態
  lensBtns.forEach(btn => {
    if (btn.dataset.view === viewKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 更新 Hero 區塊文案
  if (heroBadgeText) heroBadgeText.textContent = config.badge;
  if (heroHeadline) heroHeadline.textContent = config.headline;
  if (heroDesc) heroDesc.textContent = config.heroSubtitle;

  // 更新網址參數 (不刷新頁面)
  const url = new URL(window.location);
  url.searchParams.set('view', viewKey);
  window.history.replaceState({}, '', url);

  // 重新渲染專案清單
  renderProjects();
}

/**
 * 動態渲染專案清單
 */
function renderProjects() {
  if (!projectsContainer) return;

  const config = viewConfigs[currentView] || viewConfigs.med;
  const projectOrder = config.order;

  // 依據視角排序專案
  const sortedProjects = [...projects].sort((a, b) => {
    return projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id);
  });

  // 產生 HTML
  projectsContainer.innerHTML = sortedProjects.map(proj => {
    const pData = (currentView === 'cs' && proj.perspectives.cs) 
      ? proj.perspectives.cs 
      : proj.perspectives.med;

    const thumbnail = proj.images && proj.images.length > 0 ? proj.images[0].src : 'assets/avatar.webp';
    const keywordsHtml = pData.keywords.map((kw, idx) => `
      <span class="keyword-tag ${idx % 2 === 1 ? 'yellow-tag' : ''}">${kw}</span>
    `).join('');

    const techString = proj.techStack.slice(0, 4).join(' / ') + (proj.techStack.length > 4 ? ' ...' : '');

    return `
      <article class="project-card" data-project-id="${proj.id}">
        <div class="project-card-badge">${proj.category}</div>
        <div class="project-thumbnail-wrapper">
          <img src="${thumbnail}" alt="${pData.title}" class="project-thumbnail" loading="lazy" decoding="async">
        </div>
        <div class="project-content">
          <div class="project-unit-period">
            <span>${proj.unit}</span>
            <span>·</span>
            <span>${proj.period}</span>
          </div>
          <h3 class="project-title">${pData.title}</h3>
          <p class="project-lead">${pData.lead}</p>
          <div class="project-keywords">
            ${keywordsHtml}
          </div>
          <div class="project-footer">
            <span class="tech-chips" title="${proj.techStack.join(', ')}">${techString}</span>
            <span class="view-detail-link">
              <span>詳細分析</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // 綁定卡片點擊事件 (展開專案深度分析抽屜)
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.dataset.projectId;
      openProjectDrawer(projId);
    });
  });
}

/**
 * 開啟專案深度分析抽屜 (Project Deep Dive Drawer)
 */
function openProjectDrawer(projectId) {
  const proj = projects.find(p => p.id === projectId);
  if (!proj) return;

  const pData = (currentView === 'cs' && proj.perspectives.cs) 
    ? proj.perspectives.cs 
    : proj.perspectives.med;

  drawerCategory.textContent = proj.category;
  drawerTitle.textContent = pData.title;
  drawerMeta.textContent = `${proj.unit} ｜ ${proj.period}`;

  if (drawerTechTags) {
    drawerTechTags.innerHTML = proj.techStack.map(tech => `
      <span class="drawer-tech-tag">${tech}</span>
    `).join('');
  }

  drawerSituation.textContent = proj.sars.situation;
  drawerAction.textContent = proj.sars.action;
  drawerResult.textContent = proj.sars.result;
  drawerSummary.textContent = proj.sars.summary;

  // 渲染抽屜內所有截圖
  if (proj.images && proj.images.length > 0) {
    drawerGallery.innerHTML = proj.images.map(img => `
      <div class="gallery-item">
        <img src="${img.src}" alt="${img.caption}" class="gallery-img" loading="lazy" decoding="async">
        <div class="gallery-caption">${img.caption}</div>
      </div>
    `).join('');
  } else {
    drawerGallery.innerHTML = '<p style="color: var(--text-muted); font-size: 0.9rem;">暫無額外截圖</p>';
  }

  drawerBackdrop.classList.add('open');
  drawerBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

/**
 * 關閉專案深度分析抽屜
 */
function closeProjectDrawer() {
  drawerBackdrop.classList.remove('open');
  drawerBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// 事件監聽綁定
document.addEventListener('DOMContentLoaded', () => {
  initViewFromUrl();
  renderPillars();
  setView(currentView);

  // 視角切換器點擊
  lensBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const viewKey = btn.dataset.view;
      if (viewKey) {
        setView(viewKey);
      }
    });
  });

  // 關閉按鈕與點擊背景關閉
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeProjectDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) {
        closeProjectDrawer();
      }
    });
  }

  // 按下 ESC 鍵關閉抽屜
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerBackdrop.classList.contains('open')) {
      closeProjectDrawer();
    }
  });
});
