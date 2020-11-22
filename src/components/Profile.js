import React from 'react';

const Profile = () => {
    return (

       <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img src="data:image/png;base64,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" alt="Admin" class="rounded-circle" width="150"></img>
                <div class="mt-3">
                  <h4>Jane Doe</h4>
                  <p class="text-secondary mb-1">Full Stack Developer @ Company</p>
                  <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>

                   <div>
                   <img src="https://www.flaticon.com/svg/static/icons/svg/145/145802.svg"
                            width={30} height={30} mode='fit' alt="Facebook Icon"></img>
                   <img src="https://www.flaticon.com/svg/static/icons/svg/145/145807.svg"
                            width={30} height={30} mode='fit' alt="LinkedIn Icon"></img>
                   <img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111425.svg"
                            width={30} height={30} mode='fit' alt="LinkedIn Icon"></img>
                   </div>
                  <button class= "button">Edit Profile</button>
                </div>
              </div>
            </div>

<p class = "text-left"><b>About Me: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <table class="table table-hover">

    <tbody>
      <tr>
        <td><b>Full Name</b></td>
        <td>Jane Doe</td>
      </tr>
      <tr>
        <td><b>Email</b></td>
        <td>jdoe@company.com</td>
      </tr>
      <tr>
        <td><b>Phone</b></td>
        <td>(000) 000-0000</td>
      </tr>
    </tbody>
  </table>
       </div>

    );
}
 
export default Profile;