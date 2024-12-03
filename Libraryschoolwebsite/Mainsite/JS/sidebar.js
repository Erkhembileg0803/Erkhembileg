   // script.js
   document.addEventListener('DOMContentLoaded', () => {
     const dropdowns = document.querySelectorAll('.dropdown');
   
     if (dropdowns.length === 0) {
       console.warn('No dropdown elements found.');
     }
   
     dropdowns.forEach(dropdown => {
       dropdown.addEventListener('click', () => {
         const dropdownContent = dropdown.querySelector('.dropdown-content');
         if (!dropdownContent) {
           console.warn('No dropdown-content found for this dropdown.');
           return;
         }
   
         // Toggle display of the dropdown content
         dropdownContent.style.display =
           dropdownContent.style.display === 'block' ? 'none' : 'block';
   
         // Toggle the active class to rotate the arrow
         dropdown.classList.toggle('active');
       });
     });
   });
   
   

   document.getElementById('searchBar').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (!searchQuery.trim()) {
        return; // Don't search if the input is empty
    }

    const filesToSearch = [
        '/Libraryschoolwebsite/Education/Languages/Language book pdf/hsk1.html',
        '/Libraryschoolwebsite/Education/Languages/Language book pdf/ielts16.html',
        '/Libraryschoolwebsite/Education/Languages/Language book pdf/russian11.html',
        '/Libraryschoolwebsite/Education/Math/math books pdf/allthemath.html',
        '/Libraryschoolwebsite/Education/Math/math books pdf/basicmath.html',
        '/Libraryschoolwebsite/Education/Math/math books pdf/calculus.html',
        '/Libraryschoolwebsite/Education/Math/math books pdf/mat1angi.html',
        '/Libraryschoolwebsite/Education/Math/math books pdf/mat2angi.html',
        '/Libraryschoolwebsite/Education/Math/math books pdf/mat10angi.html',
        '/Libraryschoolwebsite/Education/Math/math books pdf/mat11angi.html',
        '/Libraryschoolwebsite/Education/Math/math books pdf/mat12angi.html',
        '/Libraryschoolwebsite/Education/Math/math books pdf/Sat2022.html',
        '/Libraryschoolwebsite/Education/Science/Science book pdf/abriefhistoryoftime.html',
        '/Libraryschoolwebsite/Education/Science/Science book pdf/fizika11.html',
        '/Libraryschoolwebsite/Education/Science/Science book pdf/git.html',
        '/Libraryschoolwebsite/Education/Science/Science book pdf/theselfishgene.html',
        '/Libraryschoolwebsite/Fiction/Fantasy/Fantasy book pdf/harrypotter.html',
        '/Libraryschoolwebsite/Fiction/Fantasy/Fantasy book pdf/lord.html',
        '/Libraryschoolwebsite/Fiction/Horror/Horror book pdf/it.html',
        '/Libraryschoolwebsite/Fiction/Horror/Horror book pdf/shining.html',
        '/Libraryschoolwebsite/Fiction/Romance/Romance book pdf/happy.html',
        '/Libraryschoolwebsite/Fiction/Romance/Romance book pdf/red.html',
        '/Libraryschoolwebsite/Selfhelp/Finance/Finance book pdf/4hour.html',
        '/Libraryschoolwebsite/Selfhelp/Finance/Finance book pdf/100mleads.html',
        '/Libraryschoolwebsite/Selfhelp/Finance/Finance book pdf/100moffers.html',
        '/Libraryschoolwebsite/Selfhelp/Finance/Finance book pdf/dotcom.html',
        '/Libraryschoolwebsite/Selfhelp/Finance/Finance book pdf/economics.html',
        '/Libraryschoolwebsite/Selfhelp/Finance/Finance book pdf/expert.html',
        '/Libraryschoolwebsite/Selfhelp/Finance/Finance book pdf/howtogetrich.html',
        '/Libraryschoolwebsite/Selfhelp/Finance/Finance book pdf/iwillteachyou.html',
        '/Libraryschoolwebsite/Selfhelp/Finance/Finance book pdf/psychologymoney.html',
        '/Libraryschoolwebsite/Selfhelp/Finance/Finance book pdf/psychologyselling.html',
        '/Libraryschoolwebsite/Selfhelp/Finance/Finance book pdf/thinkgrow.html',
        '/Libraryschoolwebsite/Selfhelp/Finance/Finance book pdf/traction.html',
        '/Libraryschoolwebsite/Selfhelp/Finance/Finance book pdf/traffic.html',
        '/Libraryschoolwebsite/Selfhelp/Philosophy/Philosophy books pdf/egoistheenemy.html',
        '/Libraryschoolwebsite/Selfhelp/Philosophy/Philosophy books pdf/letters.html',
        '/Libraryschoolwebsite/Selfhelp/Philosophy/Philosophy books pdf/meditations.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/12rules.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/artofseduction.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/atomichabits.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/canthurtme.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/cheese.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/deepwork.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/diewithzero.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/elonmusk.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/goodtogreat.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/howtoknowaperson.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/makeitstick.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/manssearchformeaning.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/mindset.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/models.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/outlive.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/powerofnow.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/sogood.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/thealchemist.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/thefouragreements.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/thethirddoor.html',
        '/Libraryschoolwebsite/Selfhelp/Productivity/Productivity book pdf/theway.html'
    ];

    filesToSearch.forEach(file => {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                // Search only in headings (h1, h2, h3)
                const headings = data.match(/<h[1].*?>(.*?)<\/h[1]>/g);

                // Find headings matching the search query
                const matchedHeadings = (headings || []).filter(heading => heading.toLowerCase().includes(searchQuery));

                if (matchedHeadings.length > 0) {
                    const result = document.createElement('div');
                    result.classList.add('search-result');

                    // Wrap the entire result in a clickable link to the file
                    const resultLink = document.createElement('a');
                    resultLink.href = file;
                    resultLink.classList.add('search-link');

                    // Add the matched headings inside the link
                    matchedHeadings.forEach(content => {
                        const cleanContent = content.replace(/<.*?>/g, ''); // Strip HTML tags
                        resultLink.innerHTML += `<p class="search-content">${cleanContent}</p>`;
                    });

                    // Append the whole link with content
                    resultsContainer.appendChild(resultLink);
                }
            })
            .catch(error => console.error('Error fetching file:', error));
    });
});


  const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
  