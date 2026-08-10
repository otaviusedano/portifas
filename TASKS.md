# Tarefas — Portfolio Otávio Sedano

Cada tarefa tem um **ID** (`T1`, `T2`, `T3`…). Adicione as próximas na seção
**A fazer**, em ordem.

**Como funciona:**
- Você me diz os IDs (ex.: "faz a T2", "faz T1 e T3", "faz da T2 até a T5").
- Eu executo **somente os que você mencionar**, na **sequência dos IDs**.
- Antes de cada tarefa confirmo o que entendi; se houver ambiguidade, pergunto
  antes de codar.
- Ao concluir, movo o item para **Concluído** marcando o checkbox e mantenho o ID.
- IDs são fixos: uma vez usado, o número não é reaproveitado.

> Formato: `- [ ] **T1** — título curto`. Detalhes opcionais em sub-linhas
> indentadas (contexto, referência, critério de aceite).

---

## 🔜 A fazer

- [ ] **T0** — (exemplo) Trocar os logos placeholder dos clientes por SVGs reais
    - Contexto: hoje é só texto em `src/data/clients.ts` + `ClientLogo`
    - Aceite: logos reais renderizando na `ClientsStrip`

- [ ] **T4** - Agora vamos criar o componente que vai substituir o roda-pe do site, conforma print /etapa-4.png.
    - Remova o footer atual, Se achar melhor, pode subistituir no componente mesmo de footer.
    
<!-- Adicione novas tarefas abaixo, seguindo os IDs: T4, T5... -->


## 🚧 Em andamento

_(vazio)_


## ✅ Concluído

- [x] **T4** — Novo footer estilo CTA (ref: `/etapa-4.png`)
    - `Footer` reescrito: painel arredondado com brilho teal na base, headline,
      subtítulo e botões LinkedIn + WhatsApp (ícones SVG inline)
    - Nova variante `solid` no `Button`; `profile.linkedin` / `profile.whatsapp`
    - `SocialLinks` removido (só era usado no footer antigo)

- [x] **T3-update** — Melhorias no slider de depoimentos
    - Removidos title/subtitle (SectionHeading) — só o hint permanece
    - Track dentro do `Container`: sempre 2 cards visíveis (proporção `/etapa-3.png`)
    - Drag melhorado com `scroll-snap` (alinha aos cards) + cursor grab
    - Hint "Drag for more testimonials →" agora é botão: clicar avança 1 item (com wrap)

- [x] **T3** — Slider de depoimentos (3 mocks) abaixo do About (ref: `/etapa-3.png`)
    - `TestimonialsSection` na Home, após o About, com hint "Drag for more testimonials →"
    - Slider drag-to-scroll via hook `useDragScroll` (pointer events)
    - Novos: `Avatar` (atom, iniciais fallback), `TestimonialCard` (molecule),
      `data/testimonials.ts`, `utils/getInitials.ts` (extraído do About)

- [x] **T2** — Mover About para a Home (abaixo de Featured projects) + "About me" rola até a seção
    - `AboutSection` agora renderiza na `HomePage`, após "Featured projects"
    - Rota `/about` e `AboutPage.tsx` removidas (conteúdo migrou p/ Home)
    - "About me" no header → `Link` para `/#about`; `RootLayout` rola até o `id`
      via `requestAnimationFrame` (com `scroll-margin-top` p/ o header sticky)

- [x] **T1** — Componente de descrição sobre o Otávio (ref: `/etapa-1.png`)
    - `AboutSection` reconstruído em 2 colunas: bio (saudação + 3 parágrafos) à
      esquerda; foto emoldurada + stats (`+3` / `+50` / `+4100`) à direita
    - Dados em `src/data/profile.ts` (`greeting`, `about[]`, `stats[]`, `photo?`)
    - ⚠️ Foto está como placeholder "OS" — trocar por `profile.photo` real depois
