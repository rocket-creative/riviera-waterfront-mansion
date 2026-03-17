'use client';

// ═══════════════════════════════════════════════════════════════════════
// TEAM INSTRUCTIONS — HOW TO ADD YOUR FORM
// ═══════════════════════════════════════════════════════════════════════
//
// 1. Go to your form provider (Typeform, JotForm, HubSpot, etc.)
// 2. Copy the full embed code they give you — this is usually either:
//      • An <iframe> snippet, OR
//      • A <script> + <div> snippet
// 3. Paste it between the backticks below, replacing the empty string.
// 4. Save the file. The form will automatically appear on the page
//    where the placeholder box is currently shown.
//
// EXAMPLE (Typeform):
//   const FORM_EMBED_CODE = `<div data-tf-live="01ABCDEF123456"></div>
//   <script src="//embed.typeform.com/next/embed.js"></script>`;
//
// EXAMPLE (JotForm iframe):
//   const FORM_EMBED_CODE = `<iframe
//     id="JotFormIFrame-123456"
//     src="https://form.jotform.com/123456"
//     style="width:100%;height:700px;border:none;"
//   ></iframe>`;
//
// ═══════════════════════════════════════════════════════════════════════

const FORM_EMBED_CODE = ``;
//                       ↑ paste your embed code between the backticks

export default function BrochureFormEmbed() {
  if (FORM_EMBED_CODE.trim()) {
    return (
      <div
        className="w-full"
        dangerouslySetInnerHTML={{ __html: FORM_EMBED_CODE }}
      />
    );
  }

  return (
    <div className="border-2 border-dashed border-riviera-gold/40 p-8 md:p-12 bg-riviera-neutral/40 text-center">
      <div className="max-w-sm mx-auto">
        <div className="w-12 h-12 bg-riviera-gold/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-riviera-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        <h3 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-3">
          Form embed goes here
        </h3>

        <p className="text-sm font-light text-riviera-text/60 leading-relaxed mb-6">
          This area is ready for your third-party form provider (Typeform, JotForm, HubSpot, etc.)
        </p>

        <div className="text-left bg-white border border-riviera-neutral p-5 space-y-3">
          <p className="text-xs tracking-widest text-riviera-gold font-light">HOW TO ADD THE FORM</p>
          <ol className="text-sm font-light text-riviera-text/70 space-y-2 list-decimal list-inside">
            <li>Get your embed code from your form provider</li>
            <li>Open <code className="bg-riviera-neutral px-1 text-xs">app/components/BrochureFormEmbed.tsx</code></li>
            <li>Find the <code className="bg-riviera-neutral px-1 text-xs">FORM_EMBED_CODE</code> constant near the top</li>
            <li>Paste your embed code between the backticks</li>
            <li>Save — the form appears instantly in this spot</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
