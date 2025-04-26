import { getDictionary } from "@/lib/dictionaries";
import { Navbar } from "../_components/navbar";
import Footer from "../_components/footer";

interface PageProps {
    params: {
        lang: string;
    };
    children: React.ReactNode;
}

export default async function RootLayout({ children, params }: PageProps) {
    const lang = params.lang;  // Maintenant ça marche ✅
    const dict = await getDictionary(lang);

    return (
        <div>
            <Navbar dict={dict} lang={lang} />
            {children}
            <Footer dict={dict} />
        </div>
    );
}
