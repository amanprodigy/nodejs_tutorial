import * as _ from 'lodash';

import { GithubAPIService } from './GithubAPIService';
import { User } from "./user";
import { Repo } from "./repo";

console.log(process.argv);
if(process.argv.length < 3){
    console.log('Please pass a username');
} else{
    let username = process.argv[2];
    var githubAPIService = new GithubAPIService();

    githubAPIService.getUserInfo(username, (user: User)=>{

        githubAPIService.getRepos(username, (repos: Repo[])=>{
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
            user.repos = sortedRepos;
            let filteredRepos = _.take(sortedRepos, 5);
            console.log(filteredRepos);
        });

    });

}
