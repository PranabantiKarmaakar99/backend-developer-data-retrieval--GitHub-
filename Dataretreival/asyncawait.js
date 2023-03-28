const fetch = require("node-fetch");


//getUserInfo, getFollowing , getRepos.


async function getUserInfo(username) {
    // username="sidujjain"

    const url = `https://api.github.com/users/${username}`;
    let result = await fetch(url);

    if(!result.ok) 
    { throw new Error (`Failed to fetch user info for ${username}`)}

    return result.json();


}



async function getFollowing(username) {
    // username="sidujjain"

    const url = `https://api.github.com/users/${username}/following`;
    let result = await fetch(url);

    if(!result.ok) 
    { throw new Error (`Failed to fetch user info for ${username}`)}

    return result.json();
}

async function getRepos(username) {
    // username="sidujjain"

    const url = `https://api.github.com/users/${username}/repos`;
    let result = await fetch(url);

    if(!result.ok) 
    { throw new Error (`Failed to fetch user info for ${username}`)}

    return result.json();
}



//getFollowingRepos

async function getFollowingRepos(username) {

    try {
    const user= await getUserInfo(username);
    console.log(`${username} is following ${user.following} people`);
    const following = await getFollowing(username);
    console.log ("followings:",following);

    const usernames =following.map((el) => el.login);
    console.log ("usernames:",usernames);

    const RepoList = await Promise.all(usernames.map((el) => { return (getRepos(el)) }));
    const flatRepos = RepoList.flat();
    const Reponames = flatRepos.map((el) => { return (el.full_name) });
    console.log("RepoNames:", Reponames);
    console.log("RepoNumber:", Reponames.length)}

    catch (error) {

        console.error(error);

    }



}






getFollowingRepos("nimeshkverma")





