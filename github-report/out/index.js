"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var GithubAPIService_1 = require("./GithubAPIService");
console.log(process.argv);
if (process.argv.length < 3) {
    console.log('Please pass a username');
}
else {
    var username_1 = process.argv[2];
    var githubAPIService = new GithubAPIService_1.GithubAPIService();
    githubAPIService.getUserInfo(username_1, function (user) {
        githubAPIService.getRepos(username_1, function (repos) {
            var sortedRepos = _.sortBy(repos, [function (repo) { return repo.forkCount * -1; }]);
            user.repos = sortedRepos;
            var filteredRepos = _.take(sortedRepos, 5);
            console.log(filteredRepos);
        });
    });
}
