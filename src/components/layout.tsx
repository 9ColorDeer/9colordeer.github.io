import Header from './header';
import Footer from './footer';

export default function Layout({ children }: { children: any }) {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
