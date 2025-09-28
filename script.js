// Dark mode functionality
        function toggleDarkMode() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            
            body.classList.toggle('dark');
            
            if (body.classList.contains('light')){
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'light');}
            else {
                themeIcon.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } 
            
        }

        // Initialize theme
        function initializeTheme() {
            const savedTheme = localStorage.getItem('theme');
            const themeIcon = document.getElementById('theme-icon');
            
            if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.body.classList.add('dark');
                themeIcon.textContent = '☀️';
            } else {
                themeIcon.textContent = '🌙';
            }
        }

        // Generate confetti
        function generateConfetti() {
            const container = document.getElementById('confetti-container');
            
            for (let i = 0; i < 20; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.animationDelay = Math.random() * 3 + 's';
                confetti.style.animationDuration = (3 + Math.random() * 2) + 's';
                container.appendChild(confetti);
            }
        }

        // Form submission
        document.getElementById('wishForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('wishName').value;
            const message = document.getElementById('wishMessage').value;
            
            console.log('Birthday wish submitted:', { name, message });
            
            // Clear form
            document.getElementById('wishName').value = '';
            document.getElementById('wishMessage').value = '';
            
            alert('🎉 Your birthday wish has been sent! 🎉');
        });

        // Initialize everything when page loads
        document.addEventListener('DOMContentLoaded', function() {
            initializeTheme();
            generateConfetti();
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (!localStorage.getItem('theme')) {
                const themeIcon = document.getElementById('theme-icon');
                if (e.matches) {
                    document.body.classList.add('dark');
                    themeIcon.textContent = '☀️';
                } else {
                    document.body.classList.remove('dark');
                    themeIcon.textContent = '🌙';
                }
            }
        });
        
        // Dark mode functionality
        function toggleDarkMode() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');

            body.classList.toggle('dark');

            if (body.classList.contains('dark')) {
                themeIcon.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        }

        // Initialize theme (default: dark mode)
        function initializeTheme() {
            const savedTheme = localStorage.getItem('theme');
            const themeIcon = document.getElementById('theme-icon');

            if (savedTheme === 'dark' || savedTheme === null) {
                // Default to dark if nothing is saved
                document.body.classList.add('dark');
                themeIcon.textContent = '☀️';
            } else {
                document.body.classList.remove('dark');
                themeIcon.textContent = '🌙';
            }
        }

        // Run on page load
        initializeTheme();


        //Confetti generator
        function createConfetti() {
            const container = document.getElementById('confetti-container');
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
                confetti.style.opacity = Math.random();
                container.appendChild(confetti);
            }
        }
        createConfetti();

        function createConfetti() {
            const container = document.getElementById("confetti-container");
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement("div");
                confetti.classList.add("confetti");
                confetti.style.left = Math.random() * 100 + "vw";
                confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
                confetti.style.opacity = Math.random();
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                container.appendChild(confetti);
            }
        }
        createConfetti();