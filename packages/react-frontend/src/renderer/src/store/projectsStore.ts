import create from 'zustand';

interface IProject {
    id: string;
    title: string;
    url: string;
    paths: string[];
}

interface IProjects {
    projects: IProject[];
    addProject: (newProject: IProject) => void;
}

export const useProjectsStore = create<IProjects>((set) => ({
    projects: [
        {
            id: "1",
            title: "Cnadian Train Vacation",
            url: "https://canadiantrainvacations.com/",
            paths: ["/", "trips", "blog"]
        },
        {
            id: "2",
            title: "Fresh Tracks Canada",
            url: "https://freshtrackscanada.com/",
            paths: ["/", "about-us", "reviews"]
        },
        {
            id: "3",
            title: "Northarn Lights Canada",
            url: "https://northernlightscanada.com/",
            paths: ["/", "about-us", "reviews"]
        }
    ],
    addProject: (newProject: IProject) => set((state) => ({ projects: [...state.projects, newProject] })) 
}));