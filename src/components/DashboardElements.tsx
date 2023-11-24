import { Link } from "react-router-dom";
import { useAuthContext } from "../util/auth";

export function Profile() {
  const authContext = useAuthContext();
  return (
    <div className="lg:sticky lg:self-start lg:translate-y-1/4 lg:top-28 mt-28 overflow-auto self-center px-10 py-4 w-80 h-fit mb-8 lg:mb-0">
      <div className="w-full aspect-square bg-primary-950 rounded-full mb-2 overflow-hidden">
        <img
          className="w-full h-full block"
          src={`https://github.com/${authContext.userData.username}.png`}
        />
      </div>

      <h2 className="font-bold text-2xl text-center my-3">
        {authContext.userData.name}
        <br />
        <span className="font-medium text-lg text-gray-400">
          (@{authContext.userData.username})
        </span>
      </h2>

      <div className="flex mt-2 justify-center gap-3">
        <Link
          className="text-center py-2 px-5 py-auto h-fit text-indigo-100 bg-primary-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-primary-800 disabled:bg-gray-600"
          to={authContext.formLink}
        >
          Edit Info
        </Link>
        <button
          className="text-center py-2 px-5 py-auto h-fit text-indigo-100 bg-red-800 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-red-800 disabled:bg-gray-600"
          onClick={authContext.onLogout}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

interface IResource {
  message: string;
  url: string;
  avatar: string;
  noAvatarRounding?: boolean;
}
export function Resources({
  title,
  resources,
}: {
  title: string;
  resources: IResource[];
}) {
  return (
    <div>
      <h3 className="font-semibold text-2xl mb-6">{title}</h3>
      <div className="space-y-4">
        {resources.map((resource, i) => (
          <a
            key={i}
            target="_blank"
            className="block text-primary hover:text-primary-600 hover:underline"
            href={resource.url}
          >
            <li className="list-none gap-5 flex items-center text-inherit">
              <div
                className={`w-10 h-10 ${
                  resource.noAvatarRounding ? "p-1" : "rounded-full"
                } overflow-hidden flex-none`}
              >
                <img src={resource.avatar} className="h-full w-full block" />
              </div>
              <div className="text-inherit text-sm">{resource.message}</div>
            </li>
          </a>
        ))}
      </div>
    </div>
  );
}
