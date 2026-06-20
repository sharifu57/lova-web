// LOVA Tweaks — palette (Soft/Bright), African texture, motion.
// Mounts only the Tweaks panel; the pages themselves stay vanilla HTML.
const LOVA_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "Soft",
  "texture": true,
  "motion": "Full"
}/*EDITMODE-END*/;

function LovaTweaks() {
  const [t, setTweak] = useTweaks(LOVA_TWEAK_DEFAULTS);

  React.useEffect(() => {
    if (window.LOVA) window.LOVA.applyTheme(t.palette === 'Bright' ? 'bright' : 'soft');
  }, [t.palette]);
  React.useEffect(() => {
    document.documentElement.classList.toggle('no-tex', !t.texture);
  }, [t.texture]);
  React.useEffect(() => {
    document.documentElement.classList.toggle('calm', t.motion === 'Calm');
  }, [t.motion]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Palette" />
      <TweakRadio label="Color mood" value={t.palette} options={['Soft', 'Bright']}
        onChange={(v) => setTweak('palette', v)} />
      <p style={{ fontSize: 11, lineHeight: 1.4, color: '#9A8A8F', margin: '2px 2px 0' }}>
        Bright shifts the site toward the app's coral, peach, mint &amp; lavender tones.
      </p>
      <TweakSection label="Style" />
      <TweakToggle label="African texture" value={t.texture}
        onChange={(v) => setTweak('texture', v)} />
      <TweakRadio label="Motion" value={t.motion} options={['Full', 'Calm']}
        onChange={(v) => setTweak('motion', v)} />
    </TweaksPanel>
  );
}

(function mountLovaTweaks() {
  const mount = () => {
    if (!window.useTweaks || !window.TweaksPanel) { setTimeout(mount, 60); return; }
    const root = document.createElement('div');
    root.id = 'lova-tweaks-root';
    document.body.appendChild(root);
    ReactDOM.createRoot(root).render(<LovaTweaks />);
  };
  mount();
})();
