import Image from "next/image";

const bookingUrl =
  "https://www.fresha.com/es/a/pintos-tattoo-and-piercing-barcelona-tattoo-piercing-pintos-carrer-del-comte-durgell-59-o39ajz94";
const instagramUrl = "https://www.instagram.com/pintostattoo/";
const whatsappUrl =
  "https://wa.me/34602037660?text=Hola%2C%20quiero%20contaros%20una%20idea%20para%20un%20tattoo%20o%20piercing.";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Pintos+Tattoo+Piercing+Carrer+del+Comte+d%27Urgell+59+Barcelona";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 15a4 4 0 0 1-4 4H9l-5 3v-7a4 4 0 0 1-1-2.6V8a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const gallery = [
  { src: "/images/pintos-05.jpg", alt: "Tatuaje de escorpión realizado en Pintos" },
  { src: "/images/pintos-06.jpg", alt: "Tatuaje anatómico de corazón realizado en Pintos" },
  { src: "/images/pintos-10.jpg", alt: "Tatuaje de corazón y espada realizado en Pintos" },
  { src: "/images/pintos-04.jpg", alt: "Piercing de septum realizado en Pintos" },
  { src: "/images/pintos-09.jpg", alt: "Mini tattoo realizado en Pintos" },
];

const reviews = [
  {
    quote:
      "I showed them my inspiration, they made a really good sketch. And it’s now a really cool tattoo.",
    name: "Jade O.",
    note: "Reseña verificada · Fresha",
  },
  {
    quote: "Daniel a été très prévenant et attentionné!",
    name: "Karine C.",
    note: "Reseña verificada · Fresha",
  },
  {
    quote: "Excelente como siempre. 100% recomendado.",
    name: "Marialejandra M.",
    note: "Reseña verificada · Fresha",
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#inicio" aria-label="Pintos, volver al inicio">
          PINTOS<span>®</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#trabajos">Trabajos</a>
          <a href="#servicios">Servicios</a>
          <a href="#estudio">Estudio</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Contar mi idea <MessageIcon />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">TATTOO + PIERCING · BARCELONA</p>
          <h1>
            Tu idea
            <br />
            no viene
            <br />
            en catálogo.
          </h1>
          <p className="hero-intro">
            Cuéntasela a los hermanos Pintos. Llevan siete años convirtiendo referencias,
            recuerdos y dibujos sueltos en algo que solo puede ser tuyo.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
              Pedir presupuesto <MessageIcon />
            </a>
            <a className="text-link" href={bookingUrl} target="_blank" rel="noreferrer">
              Ver citas y precios <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/images/pintos-02.jpg"
            alt="Tatuaje de dragón realizado en Pintos Tattoo and Piercing"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
          />
        </div>
        <div className="hero-proof" aria-label="Datos de Pintos">
          <span><strong>5,0</strong> / 53 reseñas verificadas</span>
          <span><strong>7 años</strong> haciendo tattoo y piercing</span>
          <span><strong>Urgell 59</strong> · Sant Antoni</span>
        </div>
      </section>

      <section className="studio-story" id="estudio">
        <div className="story-image">
          <Image
            src="/images/pintos-01.jpg"
            alt="Entrada del estudio Pintos Tattoo and Piercing en Barcelona"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
        <div className="story-copy">
          <p className="eyebrow">01 / EL ESTUDIO</p>
          <h2>Dos hermanos.<br />Una mesa de dibujo.<br />Nada de copiar y pegar.</h2>
          <p>
            Entra con una referencia, una historia o una idea a medias. Antes de la aguja
            viene la conversación: tamaño, lugar, diseño y presupuesto claros.
          </p>
          <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">
            Ver más en @pintostattoo <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="work" id="trabajos">
        <div className="section-heading">
          <p className="eyebrow">02 / TRABAJO REAL</p>
          <h2>La prueba<br />está en la piel.</h2>
          <p>Tattoos y piercings realizados en el estudio. Sin imágenes de stock.</p>
        </div>
        <div className="work-grid">
          {gallery.map((item, index) => (
            <figure className={`work-item work-item-${index + 1}`} key={item.src}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
              <figcaption>0{index + 1} / PINTOS</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="services" id="servicios">
        <div className="services-head">
          <p className="eyebrow">03 / EMPEZAR BIEN</p>
          <h2>Primero la idea.<br />Luego, la cita.</h2>
          <p>
            Si no sabes cuánto tiempo necesitas, empieza por una consulta. Te dirán qué
            encaja antes de que reserves una sesión.
          </p>
        </div>
        <div className="service-list">
          <article>
            <span>01</span>
            <div><h3>Consulta</h3><p>20 minutos para hablar de diseño, lugar y tamaño.</p></div>
            <strong>Gratis</strong>
            <a href={bookingUrl} target="_blank" rel="noreferrer" aria-label="Reservar consulta en Fresha"><ArrowIcon /></a>
          </article>
          <article>
            <span>02</span>
            <div><h3>Tattoo</h3><p>Sesiones de una a seis horas según la pieza.</p></div>
            <strong>Desde 85 €</strong>
            <a href={bookingUrl} target="_blank" rel="noreferrer" aria-label="Reservar tattoo en Fresha"><ArrowIcon /></a>
          </article>
          <article>
            <span>03</span>
            <div><h3>Piercing</h3><p>Elige la zona y consulta la joyería disponible.</p></div>
            <strong>Ver opciones</strong>
            <a href={bookingUrl} target="_blank" rel="noreferrer" aria-label="Ver piercings en Fresha"><ArrowIcon /></a>
          </article>
        </div>
      </section>

      <section className="process">
        <p className="eyebrow">04 / CÓMO FUNCIONA</p>
        <div className="process-grid">
          <article><span>UNO</span><h3>Cuenta la idea</h3><p>Una captura, un boceto, una historia. Lo que tengas.</p></article>
          <article><span>DOS</span><h3>Ajustad el diseño</h3><p>Tamaño, zona y presupuesto antes de empezar.</p></article>
          <article><span>TRES</span><h3>Reserva la sesión</h3><p>Elige hora online y llega con todo claro.</p></article>
        </div>
      </section>

      <section className="reviews">
        <div className="reviews-heading">
          <p className="eyebrow">05 / LO CUENTAN ELLOS</p>
          <h2>5,0 y una<br />frase que se<br />repite:<br />“me escucharon”.</h2>
          <a className="text-link" href={bookingUrl} target="_blank" rel="noreferrer">
            Ver las 53 reseñas <ArrowIcon />
          </a>
        </div>
        <div className="review-list">
          {reviews.map((review, index) => (
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="review-card" key={review.name}>
              <span>0{index + 1}</span>
              <blockquote>“{review.quote}”</blockquote>
              <div><strong>{review.name}</strong><small>{review.note}</small></div>
            </a>
          ))}
        </div>
      </section>

      <section className="visit">
        <div className="visit-copy">
          <p className="eyebrow">06 / VEN A CONTARLA</p>
          <h2>Urgell, 59.<br />La puerta con la rosa.</h2>
          <p>Carrer del Comte d’Urgell, 59 · 08011 Barcelona</p>
          <div className="visit-actions">
            <a className="button button-light" href={mapsUrl} target="_blank" rel="noreferrer">
              Abrir en Maps <PinIcon />
            </a>
            <a className="text-link" href="tel:+34602037660">602 03 76 60 <ArrowIcon /></a>
          </div>
        </div>
        <div className="visit-image">
          <Image
            src="/images/pintos-10.jpg"
            alt="Detalle de un tattoo realizado por Pintos"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="closing">
        <p>¿Ya tienes una idea?</p>
        <h2>No la dejes<br />en favoritos.</h2>
        <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
          Cuéntasela a Pintos <MessageIcon />
        </a>
      </section>

      <footer>
        <a className="wordmark" href="#inicio">PINTOS<span>®</span></a>
        <div><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a><a href={bookingUrl} target="_blank" rel="noreferrer">Reservas</a></div>
        <span>Tattoo + Piercing · Barcelona</span>
      </footer>

      <a className="mobile-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
        Contar mi idea <MessageIcon />
      </a>
    </main>
  );
}
