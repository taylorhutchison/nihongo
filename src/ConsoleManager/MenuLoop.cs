using System;

namespace ConsoleManager
{
    public class MenuLoop
    {
        private Menu _menu;
        private Action _render;
        public MenuLoop(Menu menu, Action render)
        {
            _menu = menu;
            _render = render;
        }

        public string Draw()
        {
            while (true)
            {
                _render();
                var key = Console.ReadKey();
                if (key.Key == ConsoleKey.DownArrow)
                {
                    _menu.Move(MoveDirection.Down);
                }
                else if (key.Key == ConsoleKey.UpArrow)
                {
                    _menu.Move(MoveDirection.Up);
                }
                else if (key.Key == ConsoleKey.Enter)
                {
                    return _menu.Select();
                }
            }
        }

    }
}