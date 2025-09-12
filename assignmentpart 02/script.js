 const API_URL = "https://api.github.com/users/";

    document.getElementById("searchBtn").addEventListener("click", () => {
      const username = document.getElementById("searchUser").value.trim();
      if (username) {
        getUser(username);
      }
    });

    async function getUser(username) {
      try {
        const response = await fetch(API_URL + username);
        if (!response.ok) {
          document.getElementById("profile").innerHTML = "<p>User not found!</p>";
          document.getElementById("repos").innerHTML = "";
          return;
        }
        const user = await response.json();
        showProfile(user);
        getRepos(username);
      } catch (error) {
        console.log(error);
      }
    }

    function showProfile(user) {
      document.getElementById("profile").innerHTML = `
        <img src="${user.avatar_url}" alt="avatar">
        <h2>${user.name || "No Name"}</h2>
        <p>${user.bio || "No bio available"}</p>
        <p>Followers: ${user.followers} | Following: ${user.following}</p>
        <p>Location: ${user.location || "Unknown"}</p>
        <a href="${user.html_url}" target="_blank">View Profile</a>
      `;
    }

    async function getRepos(username) {
      try {
        const response = await fetch(API_URL + username + "/repos?sort=created&per_page=5");
        const repos = await response.json();
        let output = "<h3>Latest Repositories:</h3>";
        repos.forEach(repo => {
          output += `
            <div class="repo">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
          `;
        });
        document.getElementById("repos").innerHTML = output;
      } catch (error) {
        console.log(error);
      }
    }