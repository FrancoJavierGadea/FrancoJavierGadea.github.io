
import curriculum from "@Data/Curriculum.pdf";

export const REDES = [
    {
        name: "whatsapp",
        value: "+54 9 381 606-5882",
        link: "https://wa.me/5493816065882",
        bi: "bi-whatsapp",
    },
    {
        name: "mail",
        value: "francogadea1812@gmail.com",
        link: "mailto:francogadea1812@gmail.com",
        bi: "bi-mailbox",
    },
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/franco-javier-gadea",
        bi: "bi-linkedin",
    },
    {
        name: "github",
        link: "https://github.com/FrancoJavierGadea",
        bi: "bi-github",
    },
    {
        name: "curriculum",
        link: import.meta.env.PUBLIC_CURRICULUM_URL,
        bi: "bi-file-earmark-pdf",
    },
    {
        name: "carta de presentacion",
        link: import.meta.env.PUBLIC_CARTA_URL,
        bi: "bi-envelope",
    },
];