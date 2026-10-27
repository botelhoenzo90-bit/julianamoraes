import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Clock3, Heart, Instagram, MapPin, MessageCircle, Navigation, Phone, Sparkles, Star, X } from "lucide-react";
import whatsappAsset from "@/assets/whatsapp.png.asset.json";
import julianaAsset from "@/assets/juliana-moraes.png.asset.json";
import logoAsset from "@/assets/logo-juliana-moraes.png.asset.json";
import shareAsset from "@/assets/compartilhamento-juliana-moraes.png.asset.json";
import clinicaAsset from "@/assets/clinica.png.asset.json";
import bbGlowAsset from "@/assets/bb-glow.png.asset.json";
import olheirasAsset from "@/assets/neutralizacao-olheiras.png.asset.json";
import coloracaoAsset from "@/assets/design-com-coloracao.png.asset.json";
import ciliosAsset from "@/assets/cilios-tufinho.png.asset.json";
import clareamentoAsset from "@/assets/clareamento-regiao-intima.png.asset.json";
import baVideoAsset from "@/assets/antes-depois-video.mp4.asset.json";
import baFotoAsset from "@/assets/antes-depois-caso-01.png.asset.json";
import baEstriasAbdomen from "@/assets/ba-estrias-abdomen.png.asset.json";
import baEstriasAbdomen2 from "@/assets/ba-estrias-abdomen-2.png.asset.json";
import baEstriasAbdomen3 from "@/assets/ba-estrias-abdomen-3.png.asset.json";
import baEstriasBraco from "@/assets/ba-estrias-braco.png.asset.json";
import baEstriasBraco2 from "@/assets/ba-estrias-braco-2.png.asset.json";
import baCicatriz from "@/assets/ba-cicatriz.png.asset.json";
import baDermaplaning from "@/assets/ba-dermaplaning.png.asset.json";
import baLimpezaFacial from "@/assets/ba-limpeza-facial.png.asset.json";
import baPumpUp from "@/assets/ba-pump-up.png.asset.json";

const baItems = [
  { video: true, src: baVideoAsset.url, title: "CASO 01", text: "Registro em vídeo do antes e depois do procedimento.", alt: "Vídeo do antes e depois do procedimento" },
  { video: false, src: baFotoAsset.url, title: "CASO 02", text: "Comparativo de antes e depois do procedimento.", alt: "Foto comparando o antes e o depois do procedimento" },
  { video: false, src: baEstriasAbdomen.url, title: "CASO 03", text: "Antes e depois — estrias no abdômen.", alt: "Antes e depois de estrias no abdômen" },
  { video: false, src: baEstriasAbdomen2.url, title: "CASO 04", text: "Antes e depois — estrias no abdômen.", alt: "Antes e depois de estrias no abdômen" },
  { video: false, src: baEstriasAbdomen3.url, title: "CASO 05", text: "Antes e depois — estrias no abdômen.", alt: "Antes e depois de estrias no abdômen" },
  { video: false, src: baEstriasBraco.url, title: "CASO 06", text: "Antes e depois — estrias no braço.", alt: "Antes e depois de estrias no braço" },
  { video: false, src: baEstriasBraco2.url, title: "CASO 07", text: "Antes e depois — estrias no braço.", alt: "Antes e depois de estrias no braço" },
  { video: false, src: baCicatriz.url, title: "CASO 08", text: "Antes e depois — cicatriz cirúrgica.", alt: "Antes e depois de cicatriz cirúrgica" },
  { video: false, src: baDermaplaning.url, title: "CASO 09", text: "Antes e depois — dermaplaning.", alt: "Antes e depois de dermaplaning" },
  { video: false, src: baLimpezaFacial.url, title: "CASO 10", text: "Antes e depois — limpeza de pele facial.", alt: "Antes e depois de limpeza de pele facial" },
  { video: false, src: baPumpUp.url, title: "CASO 11", text: "Antes e depois — Pump Up (vacuoterapia corporal).", alt: "Antes e depois de Pump Up, vacuoterapia corporal" },
];
const SHARE_IMG = "https://julianamoraes.lovable.app" + shareAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juliana Moraes | Camuflagem | Estética | Depilação" },
      { name: "description", content: "Camuflagem, estética e depilação com Juliana Moraes em São João de Meriti, RJ. Conheça os procedimentos e agende seu atendimento." },
      { property: "og:title", content: "Juliana Moraes | Camuflagem | Estética | Depilação" },
      { property: "og:description", content: "Juliana Moraes: camuflagem, estética e depilação com atendimento personalizado." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://julianamoraes.lovable.app/" },
      { property: "og:image", content: SHARE_IMG },
      { name: "twitter:image", content: SHARE_IMG },
      { name: "theme-color", content: "#a8843e" },
    ],
    links: [{ rel: "canonical", href: "https://julianamoraes.lovable.app/" }],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/message/ZP73PATFBKLQN1";
const INSTAGRAM = "https://www.instagram.com/julianamoraes_esteticista/";
const MAP = "https://www.google.com/maps/search/?api=1&query=Avenida+Doutor+Arruda+Negreiros,+93,+sala+08,+Sao+Joao+de+Meriti,+RJ";
const procedureImage = (filename: string) => "/procedimentos/" + encodeURIComponent(filename);

const procedures = [
  { title: "Micropigmentação Labial", price: "R$ 600,00", text: "Realça a cor natural dos lábios, com efeito delicado e aspecto rejuvenescido. Valor sem retoque.", image: procedureImage("Micropigmentação labial em close-up.png") },
  { title: "Camuflagem de Estrias", price: "A partir de R$ 150", text: "Ajuda a uniformizar o tom da pele e deixar as estrias menos aparentes.", image: procedureImage("Tratamento de Estrias em Clínica Dermatológica.png") },
  { title: "Limpeza de Pele Profunda", price: "R$ 130", text: "Remove impurezas, auxilia no controle da oleosidade e renova a aparência da pele.", image: procedureImage("Limpeza facial profissional no spa.png") },
  { title: "Tratamento para Gordura Localizada", price: "Sob consulta", text: "Protocolo estético personalizado para cuidar do contorno corporal.", image: procedureImage("Tratamento de Contorno Corporal no Abdômen.png") },
  { title: "Drenagem Linfática Pós-Operatório", price: "R$ 99,90", text: "Cuidado para auxiliar no conforto e na recuperação, conforme liberação profissional.", image: procedureImage("Massagem abdominal relaxante no spa.png") },
  { title: "Design de Sobrancelhas com Henna", price: "R$ 45", text: "Modela e preenche as sobrancelhas, valorizando o olhar com efeito natural.", image: procedureImage("Aplicação de Henna nas Sobrancelhas.png") },
  { title: "Design com Coloração", price: "R$ 60", text: "Realça e define as sobrancelhas com coloração dos fios.", image: coloracaoAsset.url },
  { title: "Tratamento de Estrias (Microderme)", price: "A partir de R$ 150", text: "Tratamento estético voltado à melhora da aparência de estrias brancas e roxas.", image: procedureImage("Tratamento de Estrias com Dermapen.png") },
  { title: "Aréolas Realistas", price: "R$ 1.300", text: "Pigmentação estética com efeito realista para reconstrução visual da aréola.", image: procedureImage("images 9 aerola.jpg") },
  { title: "Camuflagem de Cicatriz", price: "Sob consulta", text: "Pigmentação estética para suavizar visualmente a aparência de cicatrizes.", image: procedureImage("Camuflagem de cicatriz com micropigmentação.png") },
  { title: "Neutralização de Olheiras", price: "R$ 800,00", text: "Procedimento de pigmentação para harmonizar a tonalidade da região abaixo dos olhos. Valor sem retoque.", image: olheirasAsset.url },
  { title: "BB Glow", price: "R$ 350", text: "Procedimento estético que busca uma aparência mais iluminada e uniforme. Valor por sessão.", image: bbGlowAsset.url },
  { title: "Cílios Tufinho", price: "R$ 45", text: "Aplicação de tufos para realçar o olhar.", image: ciliosAsset.url },
  { title: "Estética Íntima", price: "Sob consulta", text: "Cuidados estéticos personalizados para a região íntima, após avaliação.", image: procedureImage("Estetica-Intima-1.jpg") },
  { title: "Clareamento em Região Íntima", price: "Sob consulta", text: "Protocolo estético gradual e individualizado para a região íntima.", image: clareamentoAsset.url },
  { title: "Microagulhamento Facial", price: "R$ 250", text: "Procedimento voltado à textura e aparência da pele, indicado após avaliação.", image: procedureImage("Tratamento Facial com Microagulhamento.png") },
  { title: "Dermaplaning + Revitalização", price: "R$ 120", text: "Remove células superficiais e promove uma aparência renovada e luminosa.", image: procedureImage("Tratamento Facial Luxuoso com Dermaplaning.png") },
  { title: "Peeling Químico", price: "A partir de R$ 250", text: "Tratamento facial escolhido conforme as características e necessidades da pele.", image: procedureImage("Tratamento Facial com Peeling Químico.png") },
  { title: "Depilação com Cera Hidrossolúvel", price: "Sob consulta", text: "Remoção dos pelos com atenção ao conforto e cuidado da pele.", image: procedureImage("Depilação com cera dourada no spa.png") },
  { title: "Brow Lamination", price: "R$ 150,00", text: "Alinha e modela os fios das sobrancelhas para um visual mais definido e volumoso.", image: procedureImage("Laminação de sobrancelhas em close-up.png") },
];

const faqs = [
  ["Como funciona o agendamento?", "Clique em um dos botões de WhatsApp para falar diretamente com Juliana Moraes, tirar dúvidas e consultar os horários disponíveis."],
  ["Quais procedimentos estão disponíveis?", "Há procedimentos de micropigmentação, camuflagem de estrias e cicatrizes, limpeza de pele, design de sobrancelhas, tratamentos faciais e corporais, entre outros descritos nesta página."],
  ["Os valores são fixos?", "Os valores exibidos são os informados para cada procedimento. Alguns atendimentos dependem de avaliação e aparecem como sob consulta."],
  ["A micropigmentação labial inclui retoque?", "O valor informado para micropigmentação labial é sem retoque. Consulte a profissional para entender as orientações e condições do procedimento."],
  ["Onde fica o espaço de atendimento?", "Avenida Doutor Arruda Negreiros, 93, sala 08, sobreloja, São João de Meriti - RJ."],
  ["Como saber qual procedimento é indicado para mim?", "Entre em contato para explicar o que procura e confirmar a indicação. A escolha depende de avaliação individual."],
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const goWhatsapp = (label: string) => window.open(WHATSAPP + "?text=" + encodeURIComponent("Olá, Juliana! Vim pelo seu site e gostaria de " + label.toLowerCase() + "."), "_blank", "noopener,noreferrer");

  return (
    <main className="jt-site">
      <section className="hero" id="inicio"><div className="container hero-grid"><div className="hero-copy center-hero">
        <div className="hero-logo"><img src={logoAsset.url} alt="Juliana Moraes — Estética e Beleza" /></div><span className="eyebrow">CAMUFLAGEM • ESTÉTICA • DEPILAÇÃO</span><h1>Estética avançada com <em>técnica, segurança e naturalidade.</em></h1><p className="hero-lead">Procedimentos de micropigmentação, camuflagem de estrias e cicatrizes, tratamentos faciais e corporais realizados por Juliana Moraes, com avaliação individual e protocolos personalizados para resultados harmoniosos.</p>
        <div className="hero-actions"><button className="btn btn-primary" onClick={() => goWhatsapp("agendar um procedimento")}><MessageCircle size={19} /> Quero agendar</button><a className="btn btn-outline" href="#procedimentos">Conhecer procedimentos <ArrowRight size={18} /></a></div>
        <div className="hero-trust"><span><Check size={15} /> Atendimento personalizado</span><span><Check size={15} /> São João de Meriti • RJ</span></div>
      </div></div></section>

      <div className="info-marquee" aria-label="Procedimentos estéticos"><div className="marquee-track">{[1,2].map((copy) => <div className="marquee-group" key={copy}><span>✦ MICROPIGMENTAÇÃO</span><span>✦ CAMUFLAGEM DE ESTRIAS</span><span>✦ LIMPEZA DE PELE</span><span>✦ DESIGN DE SOBRANCELHAS</span><span>✦ MICROAGULHAMENTO</span><span>✦ BROW LAMINATION</span><span>✦ ESTÉTICA FACIAL</span><span>✦ BELEZA E AUTOCUIDADO</span></div>)}</div></div>

      <section className="section how-section" id="como-funciona"><div className="container"><div className="section-heading center"><span className="eyebrow">COMO FUNCIONA</span><h2>Agendar seu cuidado em <em>4 passos simples.</em></h2><p>Do primeiro contato à escolha do procedimento, tudo começa com uma conversa.</p></div><div className="steps-grid">{[['01','Você chama','Fale pelo WhatsApp e conte o que procura.'],['02','Tira suas dúvidas','Converse sobre o procedimento e os valores.'],['03','Alinha os detalhes','Confirme a indicação e os cuidados necessários.'],['04','Agenda seu horário','Escolha um horário disponível com Juliana.']].map(([n,t,d])=><article className="step-card" key={n}><span className="step-number">{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("consultar horários disponíveis")}><MessageCircle size={18}/> Consultar horários</button></div></div></section>

      <section className="section intro-section" id="juliana"><div className="container intro-grid"><div className="intro-photo"><img src={julianaAsset.url} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Juliana Moraes, profissional de estética" loading="lazy"/></div><div className="intro-copy"><span className="eyebrow">SOBRE JULIANA MORAES</span><h2>Cuidado, técnica e dedicação para valorizar <em>sua beleza.</em></h2><p>Juliana Moraes atua nas áreas de camuflagem, estética e depilação, com atenção aos detalhes e respeito à individualidade de cada pessoa. Seu objetivo é oferecer um atendimento acolhedor, com orientação clara para que você conheça as opções disponíveis e escolha com confiança.</p><p>Cada atendimento é uma oportunidade de ouvir suas expectativas, esclarecer dúvidas e conversar sobre os cuidados mais adequados aos seus objetivos.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer os procedimentos e agendar uma avaliação")}><MessageCircle size={18}/> Fale com a Juliana</button></div></div></section>

      <section className="section pain-section"><div className="container narrow center"><span className="eyebrow">SEU MOMENTO DE AUTOCUIDADO</span><h2>Você merece se olhar no espelho e sentir <em>mais confiança.</em></h2><p>Seja para realçar os lábios, cuidar da pele, valorizar o olhar ou tratar uma região específica, o primeiro passo é entender o que você deseja e conhecer as opções disponíveis.</p><div className="check-list centered-list"><div><Check size={17}/><span>Procedimentos para diferentes objetivos estéticos.</span></div><div><Check size={17}/><span>Informações claras sobre valores e atendimento.</span></div><div><Check size={17}/><span>Orientação individual antes de escolher seu procedimento.</span></div></div><button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre qual procedimento combina comigo")}><MessageCircle size={18}/> Quero tirar minhas dúvidas</button></div></section>

      <section className="section limine-section" id="diferenciais"><div className="container limine-grid"><div className="limine-copy"><span className="eyebrow">BELEZA COM PERSONALIDADE</span><h2>Realce o que faz você <em>única.</em></h2><p>Seu cuidado começa com uma escolha consciente. Conheça os procedimentos, entenda as possibilidades para o seu objetivo e receba orientação antes de decidir. Cada pele e cada pessoa têm necessidades diferentes — por isso, a conversa individual faz toda a diferença.</p><div className="limine-benefits"><span><Sparkles size={19}/><strong>Seu objetivo em foco</strong><small>Opções escolhidas conforme o que você procura.</small></span><span><Heart size={19}/><strong>Cuidado individual</strong><small>Orientação atenta em cada etapa.</small></span><span><Check size={19}/><strong>Escolha com confiança</strong><small>Informações claras antes de agendar.</small></span></div><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer os procedimentos disponíveis")}><MessageCircle size={18}/> Conversar com Juliana</button></div></div></section>

      <section className="section procedures-section" id="procedimentos"><div className="container"><div className="section-heading center"><span className="eyebrow">SERVIÇOS</span><h2>Encontre o procedimento ideal para <em>realçar sua beleza.</em></h2><p>Conheça os serviços, confira os valores e fale com Juliana para tirar dúvidas e agendar seu atendimento.</p></div><div className="procedure-window"><div className="procedure-track">{[...procedures,...procedures].map(({title,text,price,image},i)=><article className={"procedure-card" + (image ? " has-image" : "")} key={title + i}>{image ? <img className="procedure-photo" src={image} onError={(e) => { e.currentTarget.src = "https://julianamoraes.netlify.app/foto-" + String(((i % procedures.length) + 1)).padStart(2, "0") + ".webp"; }} alt={title + " — Juliana Moraes"} loading="lazy" /> : <div className="procedure-photo procedure-photo-empty" aria-hidden="true" />}<div className="procedure-content"><div className="procedure-icon"><Sparkles size={21}/></div><span className="procedure-number">{String((i%procedures.length)+1).padStart(2,"0")}</span><h3>{title}</h3><strong className="procedure-price">{price}</strong><p>{text}</p></div></article>)}</div></div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("consultar procedimentos e horários disponíveis")}><MessageCircle size={18}/> Ver opções e horários</button></div></div></section>

      <section className="section before-after-section" id="antes-depois">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">RESULTADOS REAIS</span>
            <h2>Antes e depois: cada detalhe <em>faz diferença.</em></h2>
            <p>Uma galeria deslizante com registros reais dos procedimentos realizados por Juliana.</p>
          </div>
          <div className="before-after-window">
            <div className="before-after-track">
              {[...baItems, ...baItems].map((item, i) => (
                <article className="before-after-card" key={item.title + i}>
                  <div className="before-after-media">
                    {item.video ? (
                      <video src={item.src} autoPlay muted loop playsInline preload="auto" />
                    ) : (
                      <img src={item.src} alt={item.alt} loading="lazy" />
                    )}
                    <span className="before-after-tag">ANTES E DEPOIS</span>
                  </div>
                  <div className="before-after-caption">
                    <span>{item.title}</span>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <p className="before-after-note">Os resultados variam conforme as características individuais. As imagens devem ser publicadas com autorização.</p>
        </div>
      </section>

      <section className="section reviews-section" id="experiencia"><div className="reviews-heading"><span className="eyebrow">ATENDIMENTO PERSONALIZADO</span><h2>Cuidado individual em cada <em>etapa.</em></h2><p>Converse com Juliana, conheça os procedimentos e tire suas dúvidas antes de agendar.</p></div><div className="reviews-window"><div className="reviews-track">{[1,2,3,4,5,6,1,2,3,4,5,6].map((n,i)=><article className="review-card" key={i}><div className="review-stars">{[1,2,3,4,5].map(star=><Star key={star} size={15} fill="currentColor"/>)}</div><p>“Um atendimento acolhedor, com atenção aos detalhes e orientação em cada etapa do procedimento.”</p><div className="review-footer"><div className="review-avatar">J</div><div><strong>Juliana Moraes</strong><span>Atendimento individualizado</span></div></div></article>)}</div></div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer os procedimentos e agendar")}><MessageCircle size={18}/> Quero agendar</button></div></section>

      <section className="section about-section" id="juliana"><div className="container about-card"><div className="about-photo clinic-photo"><img src={clinicaAsset.url} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Interior elegante e acolhedor da clínica de estética" loading="lazy" /></div><div className="about-copy"><span className="eyebrow">NOSSO ESPAÇO</span><h2>Um ambiente pensado para seu <em>bem-estar.</em></h2><p>A clínica foi pensada para receber você em um ambiente acolhedor, tranquilo e dedicado ao autocuidado. Aqui, cada visita é uma oportunidade de pausar a rotina, conhecer opções de tratamento e dedicar atenção à sua beleza.</p><p>Do primeiro contato à escolha do procedimento, queremos que você se sinta à vontade para conversar, esclarecer dúvidas e entender cada etapa com tranquilidade. Seu conforto e uma experiência cuidadosa fazem parte desse momento.</p><div className="about-points"><span><Heart size={17}/> Acolhimento e conforto</span><span><Sparkles size={17}/> Cuidado com os detalhes</span><span><Check size={17}/> Orientação individual</span></div><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer a clínica e agendar uma visita")}><MessageCircle size={18}/> Conhecer nosso espaço</button></div></div></section>

      <section className="section highlight-section" id="experiencia-destaque"><div className="container narrow center"><span className="eyebrow">BELEZA COM PERSONALIDADE</span><h2>Um momento reservado para <em>você.</em></h2><p>Micropigmentação, cuidados faciais, sobrancelhas e tratamentos estéticos: conheça as opções e receba orientação para escolher o procedimento que combina com seus objetivos.</p><div className="mini-benefits centered-mini"><div><Sparkles size={20}/><span><strong>Personalização</strong><small>Cuidados alinhados aos seus objetivos.</small></span></div><div><Heart size={20}/><span><strong>Acolhimento</strong><small>Um atendimento com atenção individual.</small></span></div><div><Check size={20}/><span><strong>Informação</strong><small>Valores e detalhes alinhados previamente.</small></span></div></div><button className="btn btn-primary" onClick={() => goWhatsapp("marcar meu horário")}><MessageCircle size={18}/> Marcar meu horário</button></div></section>

      <section className="section benefits-section"><div className="container"><div className="section-heading center"><span className="eyebrow">BELEZA E ESTÉTICA PERSONALIZADAS</span><h2>Cuidados que valorizam <em>você.</em></h2><p>Da pele aos detalhes do olhar, conheça possibilidades de cuidado estético pensadas para diferentes necessidades e objetivos.</p></div><div className="benefit-grid"><article><span>01</span><Heart/><h3>Camuflagem estética</h3><p>Técnicas para suavizar visualmente a aparência de estrias e cicatrizes, após avaliação.</p></article><article><span>02</span><Sparkles/><h3>Tratamentos faciais</h3><p>Opções para cuidar da textura, da aparência e da luminosidade da pele.</p></article><article><span>03</span><Star/><h3>Sobrancelhas e lábios</h3><p>Procedimentos para realçar os traços e valorizar a expressão de forma personalizada.</p></article><article><span>04</span><Check/><h3>Cuidados corporais</h3><p>Conheça os tratamentos disponíveis e converse com Juliana sobre seu objetivo.</p></article></div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer os procedimentos e encontrar uma opção para meus objetivos")}><MessageCircle size={18}/> Encontrar meu procedimento</button></div></div></section>

      <section className="section faq-section" id="faq"><div className="container faq-layout"><div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Antes de agendar, <em>tire suas dúvidas.</em></h2><p>Se sua pergunta não estiver aqui, fale diretamente com Juliana pelo WhatsApp.</p><button className="btn btn-primary" onClick={() => goWhatsapp("tirar uma dúvida")}><MessageCircle size={18}/> Tirar uma dúvida</button></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={openFaq===i?"faq-item active":"faq-item"} key={q}><button onClick={() => setOpenFaq(openFaq===i?null:i)}><span>{q}</span>{openFaq===i?<X size={19}/>:<ChevronDown size={19}/>}</button>{openFaq===i&&<div className="faq-answer"><p>{a}</p></div>}</div>)}</div></div></section>

      <section className="section location-section" id="localizacao"><div className="container location-grid"><div className="map-card"><iframe title="Localização de Juliana Moraes em São João de Meriti" src="https://www.google.com/maps?q=Avenida+Doutor+Arruda+Negreiros,+93,+sala+08,+Sao+Joao+de+Meriti,+RJ&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div><div className="location-copy"><span className="eyebrow">LOCALIZAÇÃO</span><h2>Seu próximo momento de cuidado começa <em>aqui.</em></h2><div className="address"><MapPin size={23}/><div><strong>Avenida Doutor Arruda Negreiros, 93</strong><span>Sala 08, sobreloja • São João de Meriti - RJ</span><small>Atendimento com agendamento</small></div></div><div className="location-info"><div><Clock3 size={19}/><span><strong>Atendimento</strong>Com horário agendado</span></div><div><Phone size={19}/><span><strong>WhatsApp</strong>(21) 99465-6255</span></div></div><div className="location-actions"><button className="btn btn-primary" onClick={() => goWhatsapp("agendar meu horário")}><MessageCircle size={18}/> Agendar pelo WhatsApp</button><a className="btn btn-outline" href={MAP} target="_blank" rel="noreferrer"><Navigation size={17}/> Ver no mapa</a></div></div></div></section>

      <section className="final-cta"><div className="final-glow"/><div className="container center"><span className="eyebrow light">SEU MOMENTO COMEÇA COM UMA MENSAGEM</span><h2>Pronta para realçar sua beleza e cuidar de você?</h2><p>Converse com Juliana, tire suas dúvidas e encontre o procedimento que combina com seus objetivos.</p><button className="btn btn-primary" onClick={() => goWhatsapp("agendar meu atendimento")}><MessageCircle size={19}/> Quero agendar meu atendimento</button></div></section>

      <footer className="footer"><div className="container footer-grid"><div><a className="brand footer-brand brand-logo" href="#inicio"><img src={logoAsset.url} alt="Juliana Moraes Estética e Beleza" /><span>Juliana Moraes | Camuflagem | Estética | Depilação</span></a><p>Camuflagem, estética e depilação com atendimento personalizado em São João de Meriti - RJ.</p></div><div><h4>Atalhos</h4><a href="#procedimentos">Procedimentos</a><a href="#juliana">Sobre Juliana</a><a href="#como-funciona">Como funciona</a><a href="#faq">Perguntas frequentes</a><a href="#localizacao">Localização</a></div><div><h4>Contato</h4><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={15}/> WhatsApp</a><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={15}/> Instagram</a><span><MapPin size={15}/> São João de Meriti • RJ</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Juliana Moraes. Todos os direitos reservados.</span><span>Estética & Beleza</span></div></footer>

      <a className="floating-wa" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"><img src={whatsappAsset.url} alt="" /></a>
    </main>
  );
}
