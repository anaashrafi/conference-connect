import React from 'react';

const Profile = () => {
    return (

       <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"></img>
                <div class="mt-3">
                  <h4>John Doe</h4>
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
        <td>Jonathan Doe</td>
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