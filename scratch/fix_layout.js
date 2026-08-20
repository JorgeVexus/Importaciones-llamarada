const fs = require('fs');

// 1. Update sections/llamarada-hero-banner.liquid
let hero = fs.readFileSync('sections/llamarada-hero-banner.liquid', 'utf8');
hero = hero.replace(
  'style="{% if has_image == false %}background: linear-gradient(105deg, {{ section.settings.gradient_start | default: \'#9424a4\' }} 0%, {{ section.settings.gradient_end | default: \'#f9321f\' }} 100%);{% endif %}"',
  'style="background: linear-gradient(105deg, {{ section.settings.gradient_start | default: \'#9424a4\' }} 0%, {{ section.settings.gradient_end | default: \'#f9321f\' }} 100%); min-height: 280px; max-height: 380px;"'
);

hero = hero.replace(
  'style="background-color: {{ section.settings.cta_bg_color | default: \'#91c441\' }} !important; color: {{ section.settings.cta_text_color | default: \'#1b1b1b\' }} !important;"',
  'style="background-color: {{ section.settings.cta_bg_color | default: \'#91c441\' }} !important; color: {{ section.settings.cta_text_color | default: \'#1b1b1b\' }} !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; align-self: center !important; width: fit-content !important; height: auto !important; max-height: 56px !important;"'
);

fs.writeFileSync('sections/llamarada-hero-banner.liquid', hero, 'utf8');

// 2. Update assets/llamarada-theme.css
let css = fs.readFileSync('assets/llamarada-theme.css', 'utf8');

const layoutRules = `
/* ==========================================================================
   LAYOUT CONTAINERS & FLEX FLOW RULES
   ========================================================================== */
html, body {
  min-height: 100% !important;
  height: auto !important;
  background-color: var(--ll-bg-page) !important;
}

body {
  display: flex !important;
  flex-direction: column !important;
  margin: 0 !important;
  padding: 0 !important;
}

.shopify-section-group-header-group,
.section-header,
header.ll-header {
  display: block !important;
  width: 100% !important;
  height: auto !important;
  min-height: auto !important;
  max-height: none !important;
  flex: 0 0 auto !important;
  flex-grow: 0 !important;
  flex-shrink: 0 !important;
  position: relative !important;
}

#MainContent,
main.content-for-layout {
  flex: 1 0 auto !important;
  width: 100% !important;
  display: block !important;
  background-color: var(--ll-bg-page) !important;
  padding: 0 !important;
  margin: 0 !important;
}

.shopify-section-group-footer-group,
.section-footer {
  flex: 0 0 auto !important;
  width: 100% !important;
  height: auto !important;
}
`;

css = css.replace('/* Override Dawn container constraints & Grid Layout */', layoutRules + '\n/* Override Dawn container constraints & Grid Layout */');

css = css.replace(
  '.ll-hero__cta {\n  display: inline-block;',
  '.ll-hero__cta {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  align-self: center !important;\n  width: fit-content !important;\n  height: auto !important;\n  max-height: 56px !important;'
);

css = css.replace(
  '.ll-hero {\n  position: relative;\n  background: linear-gradient(105deg, var(--ll-purple) 0%, var(--ll-flame-red) 100%);\n  border-radius: 16px;\n  padding: 80px 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n  box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.12), 0px 4px 6px -4px rgba(0, 0, 0, 0.1);\n  min-height: 280px;\n  box-sizing: border-box;\n}',
  '.ll-hero {\n  position: relative !important;\n  background: linear-gradient(105deg, var(--ll-purple) 0%, var(--ll-flame-red) 100%) !important;\n  border-radius: 16px !important;\n  padding: 60px 40px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  text-align: center !important;\n  overflow: hidden !important;\n  box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.12), 0px 4px 6px -4px rgba(0, 0, 0, 0.1) !important;\n  min-height: 280px !important;\n  max-height: 380px !important;\n  height: auto !important;\n  box-sizing: border-box !important;\n}'
);

fs.writeFileSync('assets/llamarada-theme.css', css, 'utf8');
console.log('Successfully updated hero banner and CSS layout rules.');
