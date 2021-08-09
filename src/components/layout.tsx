import Header from './header';
import Footer from './footer';

export default function Layout({ children }: { children: any }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
