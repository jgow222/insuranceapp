/* =============================================
   ClaimMax — Internationalization (EN / ES)
   ============================================= */

const TRANSLATIONS = {
  en: {
    // Nav
    nav_how: 'How it Works',
    nav_pricing: 'Pricing',
    nav_results: 'Results',
    nav_start: 'Start a Claim',
    nav_analyze: 'Analyze My Claim',

    // Hero
    hero_badge: 'AI Claim Advocate — Auto & Renters Insurance',
    hero_title_1: 'Your insurer',
    hero_title_2: 'works against you.',
    hero_title_3: "We don't.",
    hero_subtitle: "Upload your policy and damage evidence. ClaimMax tells you exactly what you're owed, drafts a demand letter, and tracks the insurer's response. You only pay if we win you more money.",
    hero_cta: 'Analyze My Claim — Free',
    hero_note: 'No credit card. Pay only when you win more.',
    hero_card_badge: 'Claim Analysis Ready',
    hero_card_just_now: 'Just now',
    hero_card_offer: "Insurer's Offer",
    hero_card_owed: "You're Owed",
    hero_card_delta: '$3,900 more identified in your policy',
    hero_check_1: 'Policy analyzed',
    hero_check_2: 'Evidence documented',
    hero_check_3: 'Demand letter ready',

    // Stats
    stat_1_val: '22%',
    stat_1_label: 'Avg. recovery delta above initial offer',
    stat_2_val: '$8,400',
    stat_2_label: 'Average claim size we handle',
    stat_3_val: '60s',
    stat_3_label: 'Policy analyzed in under a minute',
    stat_4_val: '0%',
    stat_4_label: "Fee if we don't improve your outcome",

    // Problem
    problem_label: 'The Problem',
    problem_title: 'Insurance is built to minimize your payout.',
    problem_subtitle: "When you file a claim, adjusters work for the insurer — not for you. The average person has no idea what their policy actually covers, no way to evaluate whether the initial offer is fair, and no leverage to push back.",
    problem_quote: '"They accepted less money than they were owed because fighting back felt impossible without a lawyer."',
    problem_1_title: '80-page policies',
    problem_1_body: "Most people never read their insurance policy. Insurers count on that.",
    problem_2_title: 'Low-ball first offers',
    problem_2_body: 'Initial settlement offers are routinely 20–40% below what you\'re entitled to.',
    problem_3_title: 'No leverage without a lawyer',
    problem_3_body: 'Hiring an attorney means giving up 33% of your settlement. ClaimMax costs 10–15% — only if you win more.',

    // How it works
    how_label: 'How It Works',
    how_title: 'Five steps. One goal: more money.',
    how_subtitle: 'ClaimMax walks you through every step. Our AI does the heavy lifting.',
    how_1_title: 'Upload your policy',
    how_1_body: 'Photograph or upload your policy PDF. AI extracts coverage limits, exclusions, deductibles, and endorsements in plain English — within 60 seconds.',
    how_2_title: 'Document the incident',
    how_2_body: 'Follow the guided photo checklist. Timestamped uploads, witness info, police report linkage. AI flags missing evidence before you submit.',
    how_3_title: 'Get your Claim Score',
    how_3_body: "AI compares the insurer's offer against your policy terms, comparable settlements, and market repair costs. Surfaces the gap instantly.",
    how_4_title: 'Send the demand letter',
    how_4_body: 'One-click FCRA-compliant demand letter drafted with your evidence attached. Tracks insurer response deadlines automatically.',
    how_5_title: 'You get paid more — we take a cut',
    how_5_body: '10–15% of the delta between the insurer\'s first offer and final settlement. <strong>Zero fee if we don\'t improve your outcome.</strong>',
    how_cta: 'Start My Claim Now',

    // Results
    results_label: 'Real Results',
    results_title: 'What ClaimMax users actually recovered.',
    r1_detail: 'Auto claim — rear-end collision. Initial offer: $4,200. Final settlement: $8,100.',
    r1_badge: 'Auto Insurance',
    r1_time: '3 weeks to resolve',
    r2_detail: 'Water damage claim. Insurer missed the endorsement covering personal property. Demand letter sent, settled in 11 days.',
    r2_badge: 'Renters Insurance',
    r2_time: '11 days to resolve',
    r3_detail: "Totaled vehicle. Insurer's comp value was 30% below market. ClaimMax generated comparables and forced a reassessment.",
    r3_badge: 'Auto Insurance',
    r3_time: '6 weeks to resolve',

    // Pricing
    pricing_label: 'Pricing',
    pricing_title: 'You only pay when you win more.',
    pricing_subtitle: 'ClaimMax is 100% success-fee. No upfront cost, no subscription. If we don\'t increase your settlement, you pay nothing.',
    pricing_model_name: 'Success Fee Model',
    pricing_model_desc: "Applied only on the delta — the difference between the insurer's original offer and your final settlement.",
    pricing_rate_note: 'of recovery delta',
    pricing_ex_label: 'Example scenario',
    pricing_ex_1: "Insurer's first offer",
    pricing_ex_2: 'Your final settlement',
    pricing_ex_3: 'Recovery delta',
    pricing_ex_4: 'ClaimMax fee (12%)',
    g1: 'Free claim analysis — always',
    g2: "Zero fee if we don't improve your payout",
    g3: 'No contracts, no subscriptions',
    g4: 'Transparent settlement tracking',
    pricing_cta: 'Start a Free Claim Analysis',
    disclaimer: '<strong>Legal disclaimer:</strong> ClaimMax provides claim education and document organization — not legal advice. All communications with insurers are sent by you. We are the tool, not the party. Consult an attorney for complex disputes.',

    // Final CTA
    final_title: 'Your insurance company has<br>lawyers. Now you have AI.',
    final_subtitle: 'Analyze your claim free. You only pay when we win you more money.',
    final_cta: 'Analyze My Claim — Free',

    // Footer
    footer_credit: 'Created with Perplexity Computer',

    // Exit modal
    exit_title: 'Before you go…',
    exit_subtitle: 'The average ClaimMax user recovers <strong>$3,900 more</strong> than the insurer\'s initial offer. Your analysis is free — you only pay if we win.',
    exit_cta: 'Get My Free Analysis',
    exit_dismiss: 'No thanks, I\'ll leave money on the table',

    // Claim flow
    claim_title: 'Analyze Your Claim',
    claim_subtitle: 'Free analysis. You only pay if we improve your settlement.',
    step_1: 'Policy Upload',
    step_2: 'Incident Details',
    step_3: 'Claim Score',
    step_4: 'Demand Letter',
    panel1_title: 'Upload Your Insurance Policy',
    panel1_desc: 'Our AI reads your policy and extracts coverage limits, exclusions, deductibles, and endorsements — in plain English.',
    upload_title: 'Drop your policy here, or',
    upload_browse: 'browse',
    upload_note: 'Supports PDF, JPG, PNG — Auto or renters insurance',
    policy_type_label: 'Policy Type',
    policy_type_placeholder: 'Select your coverage type...',
    policy_type_auto: 'Auto Insurance',
    policy_type_renters: 'Renters Insurance',
    policy_type_home: 'Homeowners Insurance',
    offer_label: "Insurer's Initial Offer ($)",
    offer_placeholder: 'e.g. 4200',
    offer_hint: 'Leave blank if no offer received yet.',
    analyze_btn: 'Analyze Policy',

    // Claim flow — step 2+
    panel2_title: 'Document the Incident',
    panel2_desc: 'Strong evidence is the foundation of a strong claim. Upload photos, add details, and our AI flags anything missing before you submit.',
    incident_date_label: 'Date of Incident',
    incident_desc_label: 'Describe What Happened',
    incident_desc_placeholder: 'Describe the incident in detail. Include location, time, other parties involved, conditions, and any immediate actions taken...',
    photo_label: 'Damage Photos',
    photo_upload_title: 'Add damage photos',
    photo_upload_note: 'Timestamped uploads. More photos = stronger claim.',
    evidence_label: 'Evidence Checklist',
    check_1: 'Damage photos uploaded',
    check_2: 'Police / incident report number',
    check_3: 'Witness contact info',
    check_4: 'Repair estimates obtained',
    check_5: 'Medical / expense receipts',
    evidence_warning: 'Complete at least 3 checklist items for the strongest demand letter.',
    police_label: 'Police / Incident Report # (optional)',
    police_placeholder: 'e.g. 2026-04719',
    repair_label: 'Repair Estimate Total ($) (optional)',
    repair_placeholder: 'e.g. 8100',
    back_btn: 'Back',
    score_btn: 'Get Claim Score',

    // Score step
    analyzing_title: 'Analyzing your claim\u2026',
    analyzing_desc: 'Comparing policy terms, comparable settlements, and market repair costs.',
    progress_reading: 'Reading policy terms\u2026',
    score_title: 'Your Claim Score',
    score_desc: 'Based on policy language, evidence strength, and comparable settlements.',
    bd_offer_label: "Insurer's Initial Offer",
    bd_entitled_label: 'Estimated Entitlement',
    bd_delta_label: 'Recovery Opportunity',
    findings_title: 'What We Found',
    finding_1: "Coverage endorsement applies \u2014 insurer's offer excludes applicable OEM parts provision",
    finding_2: "Market repair estimate exceeds insurer's comp by 32%",
    finding_3: 'Witness statement not provided \u2014 would strengthen position',
    add_evidence_btn: 'Add More Evidence',
    generate_btn: 'Generate Demand Letter',

    // Demand letter step
    letter_ready_msg: '<strong>Demand letter ready.</strong> Review and send below, or open in the full Letter Manager.',
    letter_title: 'Your FCRA-Compliant Demand Letter',
    letter_desc: 'Drafted with your evidence attached. Tracks insurer response deadlines automatically.',
    letter_draft_badge: 'Draft',
    deadline_title: 'Response Deadline Tracker',
    deadline_sent_label: 'Letter sent',
    deadline_due_label: 'Insurer must respond by',
    deadline_remaining_label: 'Days remaining',
    back_to_score_btn: 'Back to Score',
    send_letter_btn: 'Send Letter &amp; Finalize Claim',

    // Exit modal stats
    exit_stat_1: 'Avg. additional recovery',
    exit_stat_2: "Fee if we don't win",

    // Payment page
    payment_title: 'Almost there \u2014 lock in your claim',
    payment_subtitle: 'Your demand letter is ready. To send it and activate deadline tracking, enter your settlement details.',
    payment_subtitle_strong: 'You only pay if you win more.',
    agreement_title: 'Settlement Agreement',
    agreement_desc: "When your claim is resolved, enter the final settlement amount. ClaimMax charges 12% of the recovery delta \u2014 zero if we don't improve your payout.",
    name_label: 'Full Name',
    name_placeholder: 'Jane Smith',
    email_label: 'Email Address',
    email_placeholder: 'jane@example.com',
    email_hint: "We'll send claim updates and deadline reminders here.",
    original_offer_label: "Insurer's Original Offer ($)",
    final_settlement_label: 'Final Settlement Amount ($)',
    final_settlement_note: '\u2014 Enter when claim is resolved',
    final_settlement_hint: "Leave blank for now. We'll prompt you when the insurer responds.",
    fee_delta_label: 'Recovery delta',
    fee_amount_label: 'ClaimMax fee (12%)',
    fee_keep_label: 'You keep',
    agree_prefix: 'I agree to the',
    agree_link: 'ClaimMax Success Fee Agreement',
    agree_suffix: 'I understand that ClaimMax charges 10\u201315% of the recovery delta only when my final settlement exceeds the insurer\u2019s original offer. Zero fee if no improvement.',
    stripe_btn: 'Activate Claim Tracking \u2014 Stripe Connect',
    stripe_note: 'Powered by Stripe Connect. Payment collected only upon successful claim resolution.',
    stripe_warning: '<strong>Note:</strong> Connecting Stripe authorizes ClaimMax to collect the success fee automatically when your settlement is confirmed. No charge until then.',
    summary_title: 'Claim Summary',
    letter_sent_badge: 'Demand Letter Sent',
    sum_type_label: 'Policy type',
    sum_offer_label: 'Initial offer',
    sum_est_label: 'Estimated entitlement',
    sum_score_label: 'Claim score',
    sum_deadline_label: 'Insurer response deadline',
    next_title: 'What Happens Next',
    next_1: 'Insurer has 30 days to respond to your demand letter.',
    next_2: "You'll receive an email alert when the deadline approaches.",
    next_3: 'When settled, enter your final amount and ClaimMax charges the success fee automatically.',
    next_4: "If the insurer denies or stonewalls, we'll recommend next steps including attorney referrals.",
    modal_title: 'Claim Activated',
    modal_desc: "Your demand letter is on file and deadline tracking is live. We'll email you updates at every step. You'll only be charged when your final settlement exceeds the original offer.",
    modal_stat_1: 'Recovery opportunity',
    modal_stat_2: 'Insurer deadline',
    modal_cta: 'Back to Dashboard',
  },

  es: {
    // Nav
    nav_how: 'Cómo Funciona',
    nav_pricing: 'Precios',
    nav_results: 'Resultados',
    nav_start: 'Iniciar Reclamo',
    nav_analyze: 'Analizar Mi Reclamo',

    // Hero
    hero_badge: 'Defensor de Reclamos con IA — Seguro de Auto y Arrendatarios',
    hero_title_1: 'Tu aseguradora',
    hero_title_2: 'trabaja en tu contra.',
    hero_title_3: 'Nosotros no.',
    hero_subtitle: 'Sube tu póliza y evidencia de daños. ClaimMax te dice exactamente lo que te deben, redacta una carta de demanda y rastrea la respuesta de la aseguradora. Solo pagas si ganamos más dinero para ti.',
    hero_cta: 'Analizar Mi Reclamo — Gratis',
    hero_note: 'Sin tarjeta de crédito. Paga solo cuando ganes más.',
    hero_card_badge: 'Análisis de Reclamo Listo',
    hero_card_just_now: 'Ahora mismo',
    hero_card_offer: 'Oferta de la Aseguradora',
    hero_card_owed: 'Lo que Te Deben',
    hero_card_delta: '$3,900 más identificados en tu póliza',
    hero_check_1: 'Póliza analizada',
    hero_check_2: 'Evidencia documentada',
    hero_check_3: 'Carta de demanda lista',

    // Stats
    stat_1_val: '22%',
    stat_1_label: 'Delta de recuperación promedio sobre oferta inicial',
    stat_2_val: '$8,400',
    stat_2_label: 'Tamaño promedio de reclamo que manejamos',
    stat_3_val: '60s',
    stat_3_label: 'Póliza analizada en menos de un minuto',
    stat_4_val: '0%',
    stat_4_label: 'Honorario si no mejoramos tu resultado',

    // Problem
    problem_label: 'El Problema',
    problem_title: 'Los seguros están diseñados para minimizar tu pago.',
    problem_subtitle: 'Cuando presentas un reclamo, los ajustadores trabajan para la aseguradora — no para ti. La mayoría de las personas no saben qué cubre su póliza, ni cómo evaluar si la oferta es justa, ni cómo exigir más.',
    problem_quote: '"Aceptaron menos dinero del que les correspondía porque pelear sin un abogado parecía imposible."',
    problem_1_title: 'Pólizas de 80 páginas',
    problem_1_body: 'La mayoría de las personas nunca leen su póliza de seguro. Las aseguradoras cuentan con eso.',
    problem_2_title: 'Ofertas iniciales bajas',
    problem_2_body: 'Las ofertas iniciales de liquidación suelen ser un 20–40% menos de lo que te corresponde.',
    problem_3_title: 'Sin poder sin abogado',
    problem_3_body: 'Contratar un abogado significa ceder el 33% de tu acuerdo. ClaimMax cobra 10–15% — solo si ganas más.',

    // How
    how_label: 'Cómo Funciona',
    how_title: 'Cinco pasos. Un objetivo: más dinero.',
    how_subtitle: 'ClaimMax te guía en cada paso. Nuestra IA hace el trabajo pesado.',
    how_1_title: 'Sube tu póliza',
    how_1_body: 'Fotografía o sube tu póliza en PDF. La IA extrae límites de cobertura, exclusiones, deducibles y endosos en lenguaje sencillo — en 60 segundos.',
    how_2_title: 'Documenta el incidente',
    how_2_body: 'Sigue la lista de verificación de fotos guiada. Cargas con marca de tiempo, información de testigos, enlace de informe policial. La IA detecta evidencia faltante antes de enviar.',
    how_3_title: 'Obtén tu Puntuación de Reclamo',
    how_3_body: 'La IA compara la oferta de la aseguradora con los términos de tu póliza, acuerdos comparables y costos de reparación del mercado. Muestra la brecha al instante.',
    how_4_title: 'Envía la carta de demanda',
    how_4_body: 'Carta de demanda conforme a la FCRA redactada con tu evidencia adjunta. Rastrea automáticamente los plazos de respuesta de la aseguradora.',
    how_5_title: 'Recibes más — nosotros tomamos una parte',
    how_5_body: '10–15% de la diferencia entre la primera oferta de la aseguradora y el acuerdo final. <strong>Sin honorario si no mejoramos tu resultado.</strong>',
    how_cta: 'Iniciar Mi Reclamo Ahora',

    // Results
    results_label: 'Resultados Reales',
    results_title: 'Lo que los usuarios de ClaimMax realmente recuperaron.',
    r1_detail: 'Reclamo de auto — colisión trasera. Oferta inicial: $4,200. Acuerdo final: $8,100.',
    r1_badge: 'Seguro de Auto',
    r1_time: '3 semanas para resolver',
    r2_detail: 'Reclamo por daños por agua. La aseguradora omitió el endoso que cubre propiedad personal. Carta de demanda enviada, resuelto en 11 días.',
    r2_badge: 'Seguro de Arrendatarios',
    r2_time: '11 días para resolver',
    r3_detail: 'Vehículo totalmente destruido. El valor de la aseguradora era 30% menor al del mercado. ClaimMax generó comparables y forzó una reasignación.',
    r3_badge: 'Seguro de Auto',
    r3_time: '6 semanas para resolver',

    // Pricing
    pricing_label: 'Precios',
    pricing_title: 'Solo pagas cuando ganas más.',
    pricing_subtitle: 'ClaimMax es 100% tarifa por éxito. Sin costo inicial, sin suscripción. Si no aumentamos tu acuerdo, no pagas nada.',
    pricing_model_name: 'Modelo de Tarifa por Éxito',
    pricing_model_desc: 'Se aplica solo sobre la diferencia entre la oferta original de la aseguradora y tu acuerdo final.',
    pricing_rate_note: 'de la diferencia recuperada',
    pricing_ex_label: 'Ejemplo',
    pricing_ex_1: 'Oferta inicial de la aseguradora',
    pricing_ex_2: 'Tu acuerdo final',
    pricing_ex_3: 'Diferencia recuperada',
    pricing_ex_4: 'Honorario ClaimMax (12%)',
    g1: 'Análisis de reclamo gratuito — siempre',
    g2: 'Sin honorario si no mejoramos tu pago',
    g3: 'Sin contratos, sin suscripciones',
    g4: 'Seguimiento transparente del acuerdo',
    pricing_cta: 'Iniciar Análisis Gratuito',
    disclaimer: '<strong>Aviso legal:</strong> ClaimMax ofrece educación sobre reclamos y organización de documentos — no asesoría legal. Todas las comunicaciones con las aseguradoras las envías tú. Somos la herramienta, no la parte. Consulta un abogado para disputas complejas.',

    // Final CTA
    final_title: 'Tu aseguradora tiene<br>abogados. Ahora tú tienes IA.',
    final_subtitle: 'Analiza tu reclamo gratis. Solo pagas cuando ganamos más dinero para ti.',
    final_cta: 'Analizar Mi Reclamo — Gratis',

    // Footer
    footer_credit: 'Creado con Perplexity Computer',

    // Exit modal
    exit_title: 'Antes de irte…',
    exit_subtitle: 'El usuario promedio de ClaimMax recupera <strong>$3,900 más</strong> que la oferta inicial de la aseguradora. Tu análisis es gratis — solo pagas si ganamos.',
    exit_cta: 'Obtener Mi Análisis Gratuito',
    exit_dismiss: 'No gracias, dejaré dinero sobre la mesa',

    // Claim flow
    claim_title: 'Analiza Tu Reclamo',
    claim_subtitle: 'Análisis gratuito. Solo pagas si mejoramos tu acuerdo.',
    step_1: 'Subir Póliza',
    step_2: 'Detalles del Incidente',
    step_3: 'Puntuación',
    step_4: 'Carta de Demanda',
    panel1_title: 'Sube Tu Póliza de Seguro',
    panel1_desc: 'Nuestra IA lee tu póliza y extrae límites de cobertura, exclusiones, deducibles y endosos — en lenguaje sencillo.',
    upload_title: 'Arrastra tu póliza aquí, o',
    upload_browse: 'selecciona archivo',
    upload_note: 'Admite PDF, JPG, PNG — Seguro de auto o arrendatarios',
    policy_type_label: 'Tipo de Póliza',
    policy_type_placeholder: 'Selecciona tu tipo de cobertura...',
    policy_type_auto: 'Seguro de Auto',
    policy_type_renters: 'Seguro de Arrendatarios',
    policy_type_home: 'Seguro de Propietario',
    offer_label: 'Oferta Inicial de la Aseguradora ($)',
    offer_placeholder: 'ej. 4200',
    offer_hint: 'Deja en blanco si aún no has recibido una oferta.',
    analyze_btn: 'Analizar Póliza',

    // Claim flow — step 2+
    panel2_title: 'Documenta el Incidente',
    panel2_desc: 'La evidencia sólida es la base de un reclamo fuerte. Sube fotos, agrega detalles y nuestra IA detecta lo que falta antes de enviar.',
    incident_date_label: 'Fecha del Incidente',
    incident_desc_label: 'Describe Lo Que Ocurrió',
    incident_desc_placeholder: 'Describe el incidente en detalle. Incluye ubicación, hora, otras partes involucradas, condiciones y acciones tomadas...',
    photo_label: 'Fotos del Daño',
    photo_upload_title: 'Agrega fotos del daño',
    photo_upload_note: 'Cargas con marca de tiempo. Más fotos = reclamo más fuerte.',
    evidence_label: 'Lista de Evidencia',
    check_1: 'Fotos del daño subidas',
    check_2: 'Número de reporte policial / incidente',
    check_3: 'Información de testigos',
    check_4: 'Estimados de reparación obtenidos',
    check_5: 'Recibos médicos / de gastos',
    evidence_warning: 'Completa al menos 3 elementos de la lista para la carta de demanda más sólida.',
    police_label: 'Número de Reporte Policial / Incidente (opcional)',
    police_placeholder: 'ej. 2026-04719',
    repair_label: 'Total del Estimado de Reparación ($) (opcional)',
    repair_placeholder: 'ej. 8100',
    back_btn: 'Atrás',
    score_btn: 'Obtener Puntuación',

    // Score step
    analyzing_title: 'Analizando tu reclamo\u2026',
    analyzing_desc: 'Comparando términos de la póliza, acuerdos comparables y costos de reparación del mercado.',
    progress_reading: 'Leyendo términos de la póliza\u2026',
    score_title: 'Tu Puntuación de Reclamo',
    score_desc: 'Basado en el lenguaje de la póliza, solidez de la evidencia y acuerdos comparables.',
    bd_offer_label: 'Oferta Inicial de la Aseguradora',
    bd_entitled_label: 'Derecho Estimado',
    bd_delta_label: 'Oportunidad de Recuperación',
    findings_title: 'Lo Que Encontramos',
    finding_1: 'El endoso de cobertura aplica \u2014 la oferta excluye la provisión de piezas OEM aplicable',
    finding_2: 'El estimado de reparación del mercado supera el de la aseguradora en un 32%',
    finding_3: 'No se proporcionó declaración de testigo \u2014 fortalecería la posición',
    add_evidence_btn: 'Agregar Más Evidencia',
    generate_btn: 'Generar Carta de Demanda',

    // Demand letter step
    letter_ready_msg: '<strong>Carta de demanda lista.</strong> Revisa y envía a continuación, o ábrela en el Gestor de Cartas.',
    letter_title: 'Tu Carta de Demanda Conforme a la FCRA',
    letter_desc: 'Redactada con tu evidencia adjunta. Rastrea automáticamente los plazos de respuesta.',
    letter_draft_badge: 'Borrador',
    deadline_title: 'Rastreador de Plazo de Respuesta',
    deadline_sent_label: 'Carta enviada',
    deadline_due_label: 'La aseguradora debe responder antes de',
    deadline_remaining_label: 'Días restantes',
    back_to_score_btn: 'Volver a Puntuación',
    send_letter_btn: 'Enviar Carta y Finalizar Reclamo',

    // Exit modal stats
    exit_stat_1: 'Recuperación adicional promedio',
    exit_stat_2: 'Honorario si no ganamos',

    // Payment page
    payment_title: 'Casi listo \u2014 confirma tu reclamo',
    payment_subtitle: 'Tu carta de demanda está lista. Para enviarla y activar el seguimiento de plazos, ingresa los detalles de tu acuerdo.',
    payment_subtitle_strong: 'Solo pagas si ganas más.',
    agreement_title: 'Acuerdo de Liquidación',
    agreement_desc: 'Cuando se resuelva tu reclamo, ingresa el monto final. ClaimMax cobra el 12% de la diferencia recuperada \u2014 cero si no mejoramos tu pago.',
    name_label: 'Nombre Completo',
    name_placeholder: 'María García',
    email_label: 'Correo Electrónico',
    email_placeholder: 'maria@ejemplo.com',
    email_hint: 'Te enviaremos actualizaciones del reclamo y recordatorios de plazos aquí.',
    original_offer_label: 'Oferta Original de la Aseguradora ($)',
    final_settlement_label: 'Monto Final del Acuerdo ($)',
    final_settlement_note: '\u2014 Ingresa cuando se resuelva el reclamo',
    final_settlement_hint: 'Deja en blanco por ahora. Te avisaremos cuando la aseguradora responda.',
    fee_delta_label: 'Diferencia recuperada',
    fee_amount_label: 'Honorario ClaimMax (12%)',
    fee_keep_label: 'Tú conservas',
    agree_prefix: 'Acepto el',
    agree_link: 'Acuerdo de Tarifa por Éxito de ClaimMax',
    agree_suffix: 'Entiendo que ClaimMax cobra entre el 10\u201315% de la diferencia recuperada solo cuando mi acuerdo final supere la oferta original. Sin honorario si no hay mejora.',
    stripe_btn: 'Activar Seguimiento de Reclamo \u2014 Stripe Connect',
    stripe_note: 'Impulsado por Stripe Connect. El pago se cobra solo tras la resolución exitosa del reclamo.',
    stripe_warning: '<strong>Nota:</strong> Conectar Stripe autoriza a ClaimMax a cobrar automáticamente el honorario por éxito cuando se confirme tu acuerdo. Sin cargo hasta entonces.',
    summary_title: 'Resumen del Reclamo',
    letter_sent_badge: 'Carta de Demanda Enviada',
    sum_type_label: 'Tipo de póliza',
    sum_offer_label: 'Oferta inicial',
    sum_est_label: 'Derecho estimado',
    sum_score_label: 'Puntuación del reclamo',
    sum_deadline_label: 'Plazo de respuesta de la aseguradora',
    next_title: 'Qué Ocurre Después',
    next_1: 'La aseguradora tiene 30 días para responder a tu carta de demanda.',
    next_2: 'Recibirás una alerta por correo cuando se acerque el plazo.',
    next_3: 'Cuando se resuelva, ingresa el monto final y ClaimMax cobra el honorario automáticamente.',
    next_4: 'Si la aseguradora rechaza o dilata, recomendaremos próximos pasos incluidas referencias a abogados.',
    modal_title: 'Reclamo Activado',
    modal_desc: 'Tu carta de demanda está registrada y el seguimiento de plazos está activo. Te enviaremos actualizaciones en cada paso. Solo se te cobrará cuando tu acuerdo final supere la oferta original.',
    modal_stat_1: 'Oportunidad de recuperación',
    modal_stat_2: 'Plazo de la aseguradora',
    modal_cta: 'Volver al Panel',
  }
};

let currentLang = 'en';

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (el.tagName === 'OPTION') {
      el.textContent = val;
    } else {
      el.innerHTML = val;
    }
  });
  // Update lang toggle button
  document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
    btn.textContent = lang === 'en' ? 'ES' : 'EN';
    btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Spanish' : 'Switch to English');
  });
  document.documentElement.lang = lang;
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'es' : 'en');
}

document.addEventListener('DOMContentLoaded', () => setLanguage('en'));
