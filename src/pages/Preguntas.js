import React from "react";
import styles from "../styles/preguntas.module.css";
import Accordion from "react-bootstrap/Accordion";

const Preguntas = () => {
  return (
    <>
      <div className={styles.preguntas}>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              ¿Qué necesito para registrar mi local en Pedí Ya?
            </Accordion.Header>
            <Accordion.Body>
              CUIL o CUIT Documento de identidad Cuenta bancaria
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              ¿Cómo y cuándo son las liquidaciones y pagos?
            </Accordion.Header>
            <Accordion.Body>
              En la sección "Finanzas" de Partner Portal, podrás ver tu estado
              de cuenta y las fechas de emisión de tu pago. Cada semana,
              recibirás tu liquidación. Emitiremos tus pagos por transferencia
              bancaria en la fecha correspondiente.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              ¿Cómo gestiono la información/ datos de mi negocio?
            </Accordion.Header>
            <Accordion.Body>
              En PedidosYa contás con Partner Portal, nuestro sitio de
              autogestión, donde podrás visualizar datos relevantes de tu
              negocio y realizar acciones como modificar precios, descripciones,
              productos y mucho más. Además, contás con un chat de Ayuda en
              Línea las 24 hs donde nuestros agentes te ayudarán en lo que
              necesites. Para loguearte en Partner Portal de PedidosYa,
              recibirás tu usuario y contraseña en el correo electrónico que
              utilizaste para registrar tu negocio. Las credenciales, una vez
              que te son enviadas, tienen apenas unas horas de vigencia, por lo
              que te recomendamos realizar el registro apenas recibas el correo
              electrónico.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              ¿Con quién me contacto si tengo algún problema?
            </Accordion.Header>
            <Accordion.Body>
              Para poder ayudarte en cualquier tema vinculado a tu cuenta,
              dudas, consultas o problemas con alguna orden, podés comunicarte a
              través de Ayuda en Línea en Partner Portal o en tu sistema de
              recepción de pedidos (GoDroid o GoWin) las 24 hs todos los días de
              la semana.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              ¿Cómo debo operar en el día a día?
            </Accordion.Header>
            <Accordion.Body>
              En PedidosYa cuidamos mucho a nuestros usuarios y queremos
              ofrecerles una experiencia increíble, rápida y fácil, por eso es
              muy importante que: 1- Aceptes los pedidos de manera rápida para
              evitar que se cancelen. 2- Evites rechazar pedidos porque es muy
              frustrante para los clientes y a su vez, tu comercio pierde
              reputación. 3- Verifiques en la orden el horario de llegada del
              repartidor para evitar demoras en la promesa de entrega a nuestros
              usuarios. Es clave prestar atención a estos puntos para evitar
              cierres de tu local por fallas operativas. Estos cierres son
              automáticos y buscan cuidar la reputación de tu local, la
              experiencia del usuario y la salud de nuestra plataforma. Si
              tienes inconvenientes o demoras en la cocina, no dudes en
              contactarte con Ayuda en Línea en Partner Portal para que podamos
              guiarte sobre cómo resolverlos.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>
              ¿Qué debo tener en cuenta a la hora de recibir un pedido?
            </Accordion.Header>
            <Accordion.Body>
              En PedidosYa, cuidamos mucho la experiencia de nuestros usuarios y
              queremos que vuelvan a pedir. Por eso, cuando recibas un pedido,
              es muy importante: 1- Que prestes atención a tu sistema de
              recepción y confirmes el pedido antes de los 5 minutos de haber
              ingresado, para evitar que ese pedido se cancele. 2- Que evites
              rechazar órdenes ya que esto implica una cancelación para los
              usuarios. Si aceptás órdenes de manera rápida y no las cancelas,
              podrás asegurar una buena experiencia para tus clientes, ¡que
              volverán a elegirte!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              ¿Cómo funcionan las áreas de entrega?
            </Accordion.Header>
            <Accordion.Body>
              En PedidosYa queremos garantizar la mejor experiencia para
              nuestros usuarios y la calidad de los productos que reciben. Por
              eso nuestras áreas de entrega se determinan en función de tiempos
              de manejo. Las áreas de entrega son dinámicas, esto significa que
              pueden modificarse en días de mucha lluvia o de mucho tráfico. De
              esta forma, evitamos que los tiempos se vean afectados y
              aseguramos la calidad de tus productos.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              ¿Puedo contratar publicidad en la app de Pedí Ya?
            </Accordion.Header>
            <Accordion.Body>
              En PedidosYa contamos con varias propuestas para que destaques tu
              restaurante en la app con espacios de posicionamiento promocionado
              según tus objetivos de venta. Podés gestionarlos desde Partner
              Portal en forma directa. También podrás sumarte a campañas de
              Marketing con productos seleccionados y aplicar descuentos en
              productos específicos o en todo tu menú. Esto te da mayor
              visibilidad, atrae mucho a los usuarios y ayuda a potenciar tu
              negocio.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default Preguntas;
