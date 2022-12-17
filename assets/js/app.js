document.addEventListener('DOMContentLoaded', () => {
      // home
      const buy = document.querySelectorAll('[class="buy"]');
      const toast = document.querySelector('.toast');
      const progress = document.querySelector('.progress');
      let timer1; let timer2;
      buy.forEach((button) => {
          const val = button.value;
          button.addEventListener('click', () => {
              const text = document.querySelector('.text-2');
              let perfume = null;
              switch (val) {
                  case '10':
                    perfume = 'Natura Fragrance';
                    break;
                  case '15':
                    perfume = 'Aura Perfume';
                    break;
                  case '20':
                    perfume = 'Aromallure';
                    break;
                  case '7':
                    perfume = 'Royale Perfumerie';
                    break;
                  case '12':
                    perfume = 'Perfume Prowess';
                    break;
                  case '18':
                    perfume = 'Ritzy Spritz';
                    break;
                }
              text.innerHTML = `Thanks for buying ${perfume}`;
              toast.removeAttribute('hidden');
              toast.classList.add('active');
              progress.classList.add('active');

              timer1 = setTimeout(() => {
                toast.hidden = true;
                toast.classList.remove('active');
              }, 2000);

              timer2 = setTimeout(() => {
                toast.hidden = true;
                progress.classList.remove('active');
              }, 2300);
          });
        });
  
  });
