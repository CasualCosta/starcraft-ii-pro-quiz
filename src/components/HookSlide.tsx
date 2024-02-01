import { IconType } from "react-icons"
import { FaXTwitter, FaGithub, FaItchIo } from "react-icons/fa6"

type Card = {
  icon: IconType,
  message: string,
  link: string
}

const HookSlide = () => {
  const cards: Card[] = [
    {
      icon: FaXTwitter,
      message: "More stuff on coming soon",
      link: "https://twitter.com/CasualCosta"
    },
    {
      icon: FaGithub,
      message: "Project's repository",
      link: "https://github.com/CasualCosta/starcraft-ii-pro-quiz"
    },
    {
      icon: FaItchIo,
      message: "Browser game I'm working on",
      link: "https://casual-costa.itch.io/raptors-rockets"
    }
  ]

  
  return (
    <div className="w-10/12 mx-10 h-96 bg-slate-800/70 rounded p-8 flex justify-center items-center flex-col">
        <p className="text-blue-300 text-4xl">Hope you enjoyed!</p>
        <div className="flex m-8 justify-center items-center">
          {cards.map((card, i) => {
            return (
              <a href={card.link}>
                <div className="flex flex-col w-32 justify-center items-center text-blue-300" key={i}>
                  <card.icon size={70} />
                  <p>{card.message}</p>
                </div>
              </a>
            )
          })}
        </div>
    </div>
  )
}

export default HookSlide