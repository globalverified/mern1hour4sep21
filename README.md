# mern1hour4sep21

# issue: Remove node_modules from git in vscode

# solution : 

1. Make .gitignore file.
 
2. Run below commands in your terminal

git rm -r --cached node_modules

git commit -m "node_modules be gone"

git push origin master