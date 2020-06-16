﻿// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information

namespace DotNetNuke.Web.Mvc
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text.RegularExpressions;
    using System.Web;
    using System.Web.Helpers;
    using System.Web.Mvc;
    using System.Web.Routing;
    using System.Xml;

    using DotNetNuke.Common;
    using DotNetNuke.Common.Utilities;
    using DotNetNuke.ComponentModel;
    using DotNetNuke.Framework.Reflections;
    using DotNetNuke.Web.Mvc.Framework;
    using DotNetNuke.Web.Mvc.Framework.Modules;

    public class MvcHttpModule : IHttpModule
    {
        public static readonly Regex MvcServicePath = new Regex(@"DesktopModules/MVC/", RegexOptions.Compiled);

        static MvcHttpModule()
        {
            var engines = ViewEngines.Engines;
            engines.Clear();
            engines.Add(new ModuleDelegatingViewEngine());
            engines.Add(new RazorViewEngine());
        }

        public void Init(HttpApplication context)
        {
            ComponentFactory.RegisterComponentInstance<IModuleExecutionEngine>(new ModuleExecutionEngine());
            context.BeginRequest += InitDnn;
        }

        private static void InitDnn(object sender, EventArgs e)
        {
            var app = sender as HttpApplication;
            if (app != null && MvcServicePath.IsMatch(app.Context.Request.RawUrl.ToLowerInvariant()))
            {
                Initialize.Init(app);
            }
        }

        public void Dispose()
        {
        }
    }
}
