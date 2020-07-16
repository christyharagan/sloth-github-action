# Segment Sloth Gitub Action

Automatically build and deploy your [Segment Sloth Function](https://github.com/christyharagan/segment-sloth) when you commit your project to GitHub

## Instructions

Build your Segment Sloth project with GitHub deployment enabled. This is the default setting, so unless you ran the project initialisation in advanced mode this should be set to true. You can check by opening your ```sloth.yaml``` file and checking the ```github_deployment``` setting. If it's false, the easiest option is to regenerate your project (in a new folder so as not to overwrite your changes) and copy the ```.github/workflow/sloth.yaml``` file into your existing project.

Once that's all set-up correctly, you'll need to store your workspace ID, workspace slug, and workspace access token in your ```sloth.yaml``` file (in the root of your project), or (if you're not storing it there for security purposes, or overriding for dev/prod purposes), you can set up secret settings in your github repository called ```segment-access-token```, ```segment-workspace-slug```, and ```segment-workspace-id```.

Finally, when you commit your code to github, it'll build and deploy automatically.