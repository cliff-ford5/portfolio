import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { AboutScreen } from './screens/AboutScreen';
import { ContactScreen } from './screens/ContactScreen';
import { ModuleScreen } from './screens/ModuleScreen';
import { SkillsScreen } from './screens/SkillsScreen';

// Same shell composition as ../crm/src/App.tsx: .shell grid holding the
// Rail + an off-canvas backdrop (mobile only) + .content-col (Topbar +
// routed <main>) — same class names, same structure, not reinterpreted.
function Shell() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={`shell${collapsed ? ' shell-rail-collapsed' : ''}`}>
      <Sidebar
        collapsed={mobileOpen ? false : collapsed}
        onToggleCollapsed={() => setCollapsed((v) => !v)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />
      {mobileOpen && <div className="rail-backdrop" onClick={() => setMobileOpen(false)} />}
      <div className="content-col">
        <Topbar onOpenMobileMenu={() => setMobileOpen(true)} />
        <main className="main">
          <Routes>
            <Route path="/" element={<AboutScreen />} />
            <Route path="/web" element={<ModuleScreen category="web" />} />
            <Route path="/mobile" element={<ModuleScreen category="mobile" />} />
            <Route path="/embedded" element={<ModuleScreen category="embedded" />} />
            <Route path="/data" element={<ModuleScreen category="data" />} />
            <Route path="/skills" element={<SkillsScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}

export default App;
