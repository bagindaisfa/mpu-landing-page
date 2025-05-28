import './preloader.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    const svg = svgRef.current;

    const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
    const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

    function startStrokeAnimation() {
      // Optional: any stroke animation logic here
      console.log('Stroke animation started');
    }

    // ✅ Promise untuk delay minimal tampil 2 detik
    const delayPromise = new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });

    // ✅ Promise untuk semua gambar selesai dimuat
    const imagesPromise = Promise.all(
      Array.from(document.images).map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((res) => {
              img.onload = img.onerror = res;
            })
      )
    );

    // ✅ Jalankan animasi hanya setelah kedua promise selesai
    Promise.all([delayPromise, imagesPromise]).then(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          startStrokeAnimation();
          if (onComplete) onComplete();
        },
      });

      tl.to('.preloader-heading .load-text', {
        y: -100,
        opacity: 0,
      })
        .to(svg, {
          duration: 0.5,
          attr: { d: curve },
          ease: 'power2.easeIn',
        })
        .to(svg, {
          duration: 0.5,
          attr: { d: flat },
          ease: 'power2.easeOut',
        })
        .to(preloader, {
          y: -1500,
        })
        .to(preloader, {
          zIndex: -1,
          display: 'none',
        });
    });
  }, [onComplete]);

  return (
    <div className="preloader" ref={preloaderRef}>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path
          id="preloaderSvg"
          ref={svgRef}
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
        ></path>
      </svg>
      <div className="preloader-heading">
        <div className="load-text">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
