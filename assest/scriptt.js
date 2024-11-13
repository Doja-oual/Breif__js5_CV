let currentStep = 1;
        const totalSteps = 8;

        // Get the step divs and hide all except the first one
        const steps = document.querySelectorAll('.form-step');

        // Function to show the next step
        function showStep(step) {
            // Hide all steps using classlist functionality
            steps.forEach((el, index) => {
                if (index + 1 == step) {
                    el.classList.remove('hidden');
                } else {
                    el.classList.add('hidden');
                }
            });
        }

        // Show the first step initially
        showStep(currentStep);

        document.querySelectorAll('button[id^="next-step"]').forEach(button => {
            button.addEventListener('click', function(e) {

                // Initialize valid variable
                let valid = true;

                // If it's the last step, generate the CV
                if (currentStep === totalSteps) {
                    generateCV();
                } else {
if (valid) {
                        currentStep++;
                        showStep(currentStep);
                        updateProgressBar();
                    } else {
                        e.preventDefault();  // Prevent form submission if validation fails
                    }
                }
            });
        });