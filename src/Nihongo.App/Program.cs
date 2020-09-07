using System;
using System.Text;
using ConsoleManager;
using Spectre.Console;
using Spectre.Console.Rendering;

namespace Nihongo.App
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();
            var options = new string[4] { "A", "B", "C", "D" };
            var menu = new Menu(options);
            void render()
            {
                Console.Clear();
                AnsiConsole.Render(
                new Panel(new Text(menu.ToString()).LeftAligned())
                .Collapse()
                .RoundedBorder()
                .SetHeader("Menu", Style.WithForeground(Color.Blue), Justify.Right));
            }
            var menuLoop = new MenuLoop(menu, render);
            var selection = menuLoop.Draw();
            Console.WriteLine($"You selected {selection}");
        }
    }
}
