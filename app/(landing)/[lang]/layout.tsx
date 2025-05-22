import { getDictionary } from "@/lib/dictionaries";
import { Navbar } from "../_components/navbar";
import Footer from "../_components/footer";

interface PageProps {
    params: {
        lang: string;
    };
    children: React.ReactNode;
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
    const dict = await getDictionary(params.lang);

    return {
        title: dict.metaTitle || "Bienvenue sur notre site",
        description: dict.metaDescription || "Explorez notre plateforme multilingue avec une navigation fluide.",
    };
}


export default async function RootLayout({ children, params }: PageProps) {
    const lang = params.lang;  // Maintenant ça marche ✅
    const dict = await getDictionary(lang);

    return (
        <div>
            <Navbar dict={dict} lang={lang} />
            {children}
            <Footer dict={dict} lang={lang} />
        </div>
    );
}
