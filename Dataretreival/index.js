const fetch = require("node-fetch");


//getUserInfo, getFollowing , getRepos.


function getUserInfo(username) {
    // username="sidujjain"

    const url = `https://api.github.com/users/${username}`;
    let result = fetch(url);

    return result.then((resp) => { return (resp.json()) })


}



function getFollowing(username) {
    // username="sidujjain"

    const url = `https://api.github.com/users/${username}/following`;
    let result = fetch(url);

    return result.then((resp) => { return (resp.json()) })
}

function getRepos(username) {
    // username="sidujjain"

    const url = `https://api.github.com/users/${username}/repos`;
    let result = fetch(url);

    return result.then((resp) => { return (resp.json()) });
}



//getFollowingRepos

function getFollowingRepos(username) {
    getUserInfo(username)
        .then((user) => {

            console.log(`${username} is following ${user.following} people`)

            console.log(user.id);
            return getFollowing(username);


        })
        .then((following) =>

            // console.log(following);


            following.map((el) => el.login))
        .then((username) => {
            console.log("usernames:", username);
            return Promise.all(username.map((username) => { return (getRepos(username)) }))

        })
        .then((user) => {

            // console.log(user);
            const flatRepos = user.flat();

            // console.log(flatRepos);
            const Reponames = flatRepos.map((el) => { return (el.full_name) })

            console.log("RepoNames:", Reponames);
            console.log("RepoNumber:", Reponames.length)




        });

}






getFollowingRepos("sidujjain")



// getUserInfo("siddujjain");
// getFollowing("siddujjain");
// getRepos("siddujjain");


